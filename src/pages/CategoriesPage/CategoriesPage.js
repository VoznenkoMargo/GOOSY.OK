/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Find from "../../components/Find/Find";
import style from "./CategoriesPage.module.scss";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import { initСategoriesItemsCreator } from "../../store/actionCreators/cardItemsCreator";

function CategoriesPage() {
  const location = useLocation().search;
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items.itemsFind);
  const categories = useSelector((store) => store.items.categories);
  const [keyCategories, setKeyCategories] = useState([]);
  const [price, setPrice] = useState(["0", "990"]);

  const setNewPrice = (data) => {
    setPrice(data);
  };

  const isLoading = false;
  const isError = false;

  useEffect(() => {
    dispatch(initСategoriesItemsCreator(location));
  }, [location]);

  useEffect(() => {
    const allCategories =
      categories.length > 0
        ? `&categories=${categories.toString()}`
        : [""].toString();
    const rangePrice = `minPrice=${price[0]}&maxPrice=${price[1]}`;
    history.push(`?${rangePrice}${allCategories}`);
  }, [categories, price]);

  useEffect(() => {
    const keys = Object.keys(items);
    console.log(keys.length > 0);
    setKeyCategories(keys);
  }, [items]);
  
  return (
    <section className={style.mainSection}>
      <div>
        <Find price={price} setNewPrice={setNewPrice}  />
      </div>
      <div>
            { (keyCategories && (keyCategories.length > 0)) ?  keyCategories.map((item) => {
            return (
              <ItemsContainer
                key={item}
                header={`${item}`}
                items={items[`${item}`]}
                isLoading={isLoading}
                isError={isError}
              />
            );
          })  
          :
          <div className={style.emptyContainer}>
            <div>
              <p>Sorry, but your search did not match anything.</p>
            </div>
          </div> }
         
      </div>
    </section>
  );
}

export default CategoriesPage;
