import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Find from "../../components/Find/Find";
import style from "./CategoriesPage.module.scss";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import Select from "../../components/Select/Select";
import { initCardItemsCreator, initСategoriesItemsCreator } from "../../store/actionCreators/cardItemsCreator";

function CategoriesPage() {
    const items = useSelector((store) => store.items.items);
    const [categories, setCategories]= useState([])
    const [price, setPrice] = useState(['0','200'])
    const isLoading = false;
    const isError = false;
    
    
    // console.log(allCategories);
    const dispatch = useDispatch();
    const setPri = (data)=>{setPrice(data)}
    const setCateg = (data)=>{setCategories(data)}

    useEffect(() => {
        const newFind = {categories:categories}
        newFind.price = price 
      dispatch(initСategoriesItemsCreator(newFind));
    }, [categories,price]);

    let allCategories = {}
    // items.map((item)=>{
    //    if( !allCategories[item.categories]){
    //         if( !Array.isArray(allCategories[item.categories])){
    //             allCategories[item.categories]= []
    //         }
    //     allCategories[item.categories] = allCategories[item.categories].push(item)
    //    }
    // })
    // console.log(allCategories);

  return (
    <section className={style.mainSection}>
      <div>
        <Find price={price} setPri={setPri} setCateg={setCateg} />
      </div>
      <div>
        {/* <Select /> */}
        <ItemsContainer
          className={style.test}
        //   header={}
          items={items}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </section>
  );
}

export default CategoriesPage;
