import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import { initCardItemsCreator } from "../../store/actionCreators/cardItemsCreator";

function HomePage() {

  const items = useSelector((store) => store.items.items);
  const isLoading = false;
  const isError = false;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCardItemsCreator());
  }, []);
  
  return (
    <div>
      <Carousel />
      <ItemsContainer
        header="Popular dishes"
        items={items}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

export default HomePage;
