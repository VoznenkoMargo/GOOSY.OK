import React from 'react'

// Import css files
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemTest from '../../components/Item/ItemTest.js';
import product from "../dishes.json"
import style from "./CategoriesPage.module.scss"



function CategoriesPage () {
    const {dishes} = product
    const allProduct = {}
    const keyProduct = []
    dishes.map(item => {
        const key = item.categories.toString()
        allProduct[key] && (allProduct[key] = [...allProduct[key], item])
        !allProduct[key]  && keyProduct.push(key) && (allProduct[key] = [item])
    })
   
    const settings ={
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        accessibility: false,
        autoplay: false,
        responsive: [
          {
            breakpoint: 1450,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1020,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

    //   const arr = [dishes[0],dishes[1],dishes[2],dishes[3]]
      return (
          <section className={style.conteiner} >
        {/* <Slider {...settings}>
            {arr.map(item=> <ItemTest prduct={item}/>)}
        </Slider>
        <Slider {...settings}>
            {arr.map(item=> <ItemTest prduct={item}/>)}
        </Slider> */}
        {keyProduct.map(key => 
        <Slider {...settings}>
            {allProduct[key].map(prod=> <ItemTest prduct={prod}/>)}
        </Slider>)}
        </section>
      );

    // return (
    //     <div><p>asd</p></div>
    // );
};

export default CategoriesPage;