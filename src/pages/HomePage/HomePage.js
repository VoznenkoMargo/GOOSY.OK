/* eslint-disable import/extensions */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/carousel/Carousel";

// import axios from 'axios';

import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import { initItems } from "../../store/actionCreators";

function HomePage() {
  const url = useSelector((store) => store.items.url);
  const items = useSelector((store) => store.items.items).slice(0, 12);
  const isLoading = false;
  const isError = false;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initItems(url));
  }, [url]);

  // eslint-disable-next-line react/prop-types

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
