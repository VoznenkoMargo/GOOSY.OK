/* eslint-disable import/extensions */
import React, {useState, useEffect } from 'react';
// import axios from 'axios';
import Carousel from "../../components/Carousel/Carousel";
import ItemsContainer from '../../components/ItemsContainer/ItemsContainer';
// import Item from "../../components/Item/Item";



function HomePage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
      (async ()=>{
          try {
              const response = await fetch('http://35.180.205.240:5000/api/products')
              .then(e => e.json())
              setItems(response);
              setIsLoading(false);
          } catch (e) {
              setIsLoading(false);
              setIsError(true);
          }
      })()
  },[]);

  // eslint-disable-next-line react/prop-types

    return (
        <div>
            <Carousel/>
            <ItemsContainer items={items} isLoading={isLoading} isError={isError} />
        </div>
    )
}

export default HomePage;
