/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";
import Carousel from "../../components/carousel/Carousel";

function HomePage() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const apiUrl = 'http://35.180.205.240:5000/api/products';
        axios.get(apiUrl).then((resp) => {
          const allItems = resp.data;
          setItems(allItems);
        });
      }, [setItems]);
    return (
        <div>
            <Header/>
           <Carousel/>
            <Item items={items}/>
        </div>
    )
}

export default HomePage;
