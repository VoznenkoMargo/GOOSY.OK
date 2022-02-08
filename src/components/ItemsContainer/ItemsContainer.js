/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { BiHomeAlt, BiDish } from "react-icons/bi";
import Item from "../Item/Item";
import styles from "./ItemsContainer.module.scss";
import flames from "../../assets/flames.png";
import { clearSearchItemsCreator } from "../../store/actionCreators/searchItemsCreator";

const ItemsContainer = (props) => {
  const { items, header } = props;
  const { isSearched } = useSelector((store) => store.search);
  const match = useRouteMatch();
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className={styles.itemsWrapper}>
        <h2 className={styles.items_header}>{header}</h2>
        <img alt="" width="30px" src={flames} />
      </div>

      {match.path !== "/products" && (
        <Link className={styles.allProducts} to="/products">
          <BiDish style={{ color: "#618967", fontSize: "30px" }} />
          To all dishes
        </Link>
      )}
      {match.path === "/products" && (
        <Link className={styles.allProducts} to="/">
          <BiHomeAlt style={{ color: "#618967", fontSize: "30px" }} />
          To main page
        </Link>
      )}
      {isSearched && match.path === "/products" && (
        <div
          className={styles.resetButton}
          aria-hidden
          onClick={() => dispatch(clearSearchItemsCreator())}
        >
          Reset search results
        </div>
      )}
      <div className={styles.itemsContainer}>
        {items.length > 0 &&
          items.map(({ itemNo, ...args }) => (
            <Item key={itemNo} itemNo={itemNo} {...args} />
          ))}

        {!items.length && (
          <p className={styles.nothingFound}>Nothing found :(</p>
        )}
      </div>
    </div>
  );
};

export default ItemsContainer;
