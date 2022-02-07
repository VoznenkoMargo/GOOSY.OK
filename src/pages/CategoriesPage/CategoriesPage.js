/* eslint-disable object-shorthand */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Find from "../../components/Find/Find";
import style from "./CategoriesPage.module.scss";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
// import Select from "../../components/Select/Select";
import { initСategoriesItemsCreator } from "../../store/actionCreators/cardItemsCreator";

function CategoriesPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items.itemsFind);
  const [categories, setCategories] = useState([
    "cold snaks",
    "soup",
    "salads",
    "desert",
    "hot snaks",
  ]);
  const [price, setPrice] = useState(["0", "200"]);
  const setPri = (data) => {
    setPrice(data);
  };
  const setCateg = (data) => {
    setCategories(data);
  };

  const isLoading = false;
  const isError = false;

  useEffect(() => {
    const newFind = { categories: categories };
    newFind.price = price;
    console.log(items);
    dispatch(initСategoriesItemsCreator(newFind));
  }, [categories, price]);

  return (
    <section className={style.mainSection}>
      <div>
        <Find price={price} setPri={setPri} setCateg={setCateg} />
      </div>
      <div>
        {/* <Select /> */}
        {categories !== undefined &&
          categories.map((key) => {
            return (
              <ItemsContainer
                header={`${key}`}
                items={items[`${key}`]}
                isLoading={isLoading}
                isError={isError}
              />
            );
          })}
      </div>
    </section>
  );
}

export default CategoriesPage;
