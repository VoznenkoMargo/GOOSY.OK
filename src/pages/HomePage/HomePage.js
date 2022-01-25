/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Item from "../../components/Item/Item";



function HomePage() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const apiUrl = 'http://35.180.205.240:5000/api/products';
        axios.get(apiUrl).then((resp) => {
          const allItems = resp.data;
          setItems(allItems);
          console.log(allItems);
        });
      }, [setItems]);







    return (
        <div>
            {/* <Header/> */}
            <Carousel/>
            <Item items={items}/>
        </div>
    )
}

export default HomePage;
