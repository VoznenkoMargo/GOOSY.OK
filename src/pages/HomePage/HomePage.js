import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import { initCardItemsCreator } from "../../store/actionCreators/cardItemsCreator";
import { clearSearchItemsCreator } from "../../store/actionCreators/searchItemsCreator";

function HomePage() {
  const items = useSelector((store) => store.items.items).slice(0, 12);
  const { searchItems, isSearched } = useSelector((store) => store.search);
  console.log(searchItems);
  console.log(isSearched);
  const isLoading = false;
  const isError = false;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCardItemsCreator());
  }, []);

  return (
    <div>
      <Carousel />
      {isSearched && (
        <ItemsContainer
          header="Search results"
          items={searchItems}
          isLoading={isLoading}
          isError={isError}
        />
      )}

      {!isSearched && (
        <ItemsContainer
          header="Popular dishes"
          items={items}
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </div>
  );
}

export default HomePage;
