/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React, {useEffect} from "react";
import { getUserWishlist } from "../../store/actionCreators/wishlistItemsCreator";
import { useSelector, useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { BiHomeAlt, BiDish } from "react-icons/bi";
import { AiOutlineClear } from "react-icons/ai";
import Item from "../Item/Item";
import styles from "./ItemsContainer.module.scss";
import flames from "../../assets/flames.png";
import { clearSearchItemsCreator } from "../../store/actionCreators/searchItemsCreator";

const ItemsContainer = (props) => {
  const { items, header } = props;

  // const cartArray = useSelector((state) => {
  //   return state.cart.cartItems;
  // });
  // for (let i = 0; i < items.length; i += 1) {
  //   for (let j = 0; j < cartArray.length; j += 1) {
  //     if (items[i].itemNo === cartArray[j].itemNo) {
  //       items[i] = { ...items[i], ...cartArray[j] };
  //     }

  //   }
  // }

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getUserWishlist())
}, [])


  const { isSearched } = useSelector((store) => store.search);
  const match = useRouteMatch();
 

  return (
    <div className="container">
      <div className={styles.itemsWrapper}>
        <h2 className={styles.items_header}>{header}</h2>

        <img alt="" width="40px" src={flames} />
      </div>

      {match.path === "/" && (
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
          <AiOutlineClear style={{ color: "#618967", fontSize: "30px" }} />
          <p>Reset search results</p>
        </div>
      )}
      {isSearched && match.path === "/" && (
        <div
          className={styles.resetButton}
          aria-hidden
          onClick={() => dispatch(clearSearchItemsCreator())}
        >
          <AiOutlineClear style={{ color: "#618967", fontSize: "30px" }} />
          <p>Reset search results</p>
        </div>
      )}
      <div className={styles.itemsContainer}>
        {items &&
          items.map(({ itemNo, ...args }) => (
            <Item key={itemNo} itemNo={itemNo} {...args} />
          ))}

        {!items && <p className={styles.nothingFound}>Nothing found :(</p>}
      </div>
    </div>
  );
};

export default ItemsContainer;
