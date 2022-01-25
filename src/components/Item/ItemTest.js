import React from 'react';
// import PropTypes from "prop-types";
// import { HiPlus, HiMinus } from "react-icons/hi"
import styles from "./Item.module.scss"
import AddCartBtn from "../AddCartBtn/AddCartBtn";



function ItemTest ( {prduct}) {

    return (
        <div className={styles.container}>
                <div className={styles.item} key={prduct.quantity}>
                    <img src={prduct.imageUrls[0]} alt="dish"/>
                    <div>
                        <div className={styles.mainInfo}>
                            <div className={styles.title}>{prduct.name}</div>
                            <div className={styles.weight}>{prduct.weight} </div>
                        </div>
                       <p className={styles.description}>{prduct.categories}</p>
                    </div>
                    <div className={styles.priceInfo}>
                        <h2 className={styles.price}>{prduct.currentPrice}</h2>
                        <AddCartBtn/>
                    </div>
                </div>
            
        </div>
    );
}

export default ItemTest;


