/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
// /* eslint-disable import/extensions */
// /* eslint-disable react/function-component-definition */
// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";



const ProductsPage = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        (async ()=>{
            try {
                const response = await fetch('http://35.180.205.240:5000/api/products')
                .then(e => e.json())
                setItems(response);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
            }
        })()
    },[]);

    // eslint-disable-next-line react/prop-types

    return (
        <ItemsContainer items={items} isLoading={isLoading}/>
        )
}

export default ProductsPage;

