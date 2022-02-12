import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import { initCardItemsCreator } from "../../store/actionCreators/cardItemsCreator";

function HomePage() {
  const items = useSelector((store) => store.items.items).slice(0, 12);
  const { searchItems, isSearched } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCardItemsCreator());
  }, []);
  
  return (
    <div>
      <Carousel />

      {!isSearched && <ItemsContainer header="Popular dishes" items={items} />}
      {isSearched && (
        <ItemsContainer header="Search results" items={searchItems} />
      )}
    </div>
  );
}

export default HomePage;
