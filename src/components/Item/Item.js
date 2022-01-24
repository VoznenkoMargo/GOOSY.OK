import React from 'react';
// import PropTypes from "prop-types";
import { HiPlus, HiMinus } from "react-icons/hi"
import styles from "./Item.module.scss"
import AddCartBtn from "../AddCartBtn/AddCartBtn";


function Item () {
    const items = [
        {
        id: 1,
        img: "https://i.gifer.com/7Jdz.gif",
        title: "Гусь",
        weight: "Вес: 225 г",
        description: "Фаршированный рисом, яблоком, трюфелем и спелой черешней",
        price: "7 900 ₽"
    },
        {
        id: 2,
        img: "https://i.gifer.com/LS8v.gif",
        title: "Индейка",
        weight: "Вес: 225 г",
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: "450 ₽"
    }
    ]

    const itemsAdded = [
        {
        id: 1,
        img: "https://i.gifer.com/7Jdz.gif",
        title: "Гусь",
        weight: "Вес: 225 г",
        description: "Фаршированный рисом, яблоком, трюфелем и спелой черешней",
        price: "7 900 ₽"
    },
        {
        id: 2,
        img: "https://i.gifer.com/LS8v.gif",
        title: "Индейка",
        weight: "Вес: 225 г",
        description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        price: "450 ₽"
    }
    ]

    return (
        <div className={styles.container}>
            {items.map(item => (
                <div className={styles.item} key={item.id}>
                    <img src={item.img} alt="dish"/>

                    <div>
                        <div className={styles.mainInfo}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.weight}>{item.weight} </div>
                        </div>

                        <p className={styles.description}>{item.description}</p>
                    </div>

                    <div className={styles.priceInfo}>
                        <h2 className={styles.price}>{item.price}</h2>
                        <AddCartBtn/>
                    </div>

                </div>
            ))}

            {itemsAdded.map(item => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.dishCount}>
                        <p>3</p>
                    </div>
                    <img src={item.img} alt="dish"/>
                    <div>
                        <div className={styles.mainInfo}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.weight}>{item.weight} </div>
                        </div>

                        <p className={styles.description}>{item.description}</p>
                    </div>

                    <div className={styles.priceInfo}>
                        <div className={styles.plus}><HiPlus/></div>
                        <h2 className={styles.price}>{item.price}</h2>
                        <div className={styles.minus}><HiMinus/></div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Item;


