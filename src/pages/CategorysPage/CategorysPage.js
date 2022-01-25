import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../../components/Item/Item';
import Find from '../../components/Find/Find';
import style from "./CategorysPage.module.scss"
import MultipleSelectChip from '../../components/MultipleSelectChip/MultipleSelectChip';


function CategorysPage () {

    const [items, setItems] = useState([]);
    useEffect(() => {
        const apiUrl = 'http://35.180.205.240:5000/api/products';
        axios.get(apiUrl).then((resp) => {
          const allItems = resp.data;
          setItems(allItems);
          console.log(allItems);
        });
      }, [setItems]);

    return(
        <section className={style.mainSection}>
            <div>
                <Find/>
            </div>
            <div>
            <MultipleSelectChip/>
            <Item items={items}/>

            </div>

        </section>
    )
}

export default CategorysPage