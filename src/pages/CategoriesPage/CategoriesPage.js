import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Find from "../../components/Find/Find";
import style from "./CategoriesPage.module.scss";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import Select from "../../components/Select/Select";
import {initСategoriesItemsCreator } from "../../store/actionCreators/cardItemsCreator";

function CategoriesPage() {
    const items = useSelector((store) => store.items.items);
    const [categories, setCategories]= useState([])
    const [price, setPrice] = useState(['0','200'])
    const isLoading = false;
    const isError = false;
    const dispatch = useDispatch();
    const setPri = (data)=>{setPrice(data)}
    const setCateg = (data)=>{setCategories(data)}


    useEffect(() => {
        const newFind = {categories:categories}
        newFind.price = price 
      dispatch(initСategoriesItemsCreator(newFind));
    }, [categories,price]);
    const allCategories = {}
    useEffect( ()=>{
    items.map((item)=>{
     if(!(`${item.categories}` in allCategories)){
      allCategories[item.categories] = [item]
     }
      else {
        allCategories[item.categories] = [...allCategories[item.categories],item]
      }
    })},[items]);
    console.log(allCategories,categories)

  return (
    <section className={style.mainSection}>
      <div>
        <Find price={price} setPri={setPri} setCateg={setCateg} />
      </div>
      <div>
        {/* <Select /> */}
          <ItemsContainer
          className={style.test}
          header={`asd`}
          items={items}
          isLoading={isLoading}
          isError={isError}
          />
      </div>
    </section>
  );
}

export default CategoriesPage;
