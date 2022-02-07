/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import { initCardItemsCreator } from "../../store/actionCreators/cardItemsCreator";

const ProductsPage = () => {
  const items = useSelector((store) => store.items.items);
  const isLoading = false;
  const isError = false;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCardItemsCreator());
  }, []);

  return (
    <div>
      <ItemsContainer
        header="All dishes"
        items={items}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default ProductsPage;
