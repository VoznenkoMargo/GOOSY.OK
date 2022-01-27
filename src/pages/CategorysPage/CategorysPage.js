import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Find from '../../components/Find/Find';
import style from "./CategorysPage.module.scss"

// import MultipleSelectChip from '../../components/MultipleSelectChip/MultipleSelectChip';
import ItemsContainer from '../../components/ItemsContainer/ItemsContainer';
import Select from '../../components/Select/Select';


function CategorysPage () {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [url,setUrl]= useState('')
    
 
    const apiUrl = 'http://35.180.205.240:5000/api/products/'
    useEffect(() => {
         axios.get(`${apiUrl}${url}`)
        .then(({data}) => {
          const allItems = Array.isArray(data) ? data : data.products;
          setItems(allItems);
          setIsLoading(false);
        })
        .catch(e=>{ 
            setIsLoading(false);
            setIsError(true);
            console.log(e);
          })
      }, [setItems]);
      console.log(setUrl);
    return(
        <section className={style.mainSection}>
            <div>
                <Find/>
            </div>
            <div>
            <Select setUrl/>
            <ItemsContainer className={style.test} items={items} isLoading={isLoading} isError={isError} />

            </div>

        </section>
    )
}

export default CategorysPage