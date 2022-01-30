/* eslint-disable react/prop-types */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./carousel.scss";

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} aria-hidden>
      <ArrowBackIos className="arrowStyle" />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} aria-hidden>
      <ArrowForwardIos className="arrowStyle" />
    </div>
  );
}

function Carousel() {
  const images = [
    {
      image:
        "https://supericebuckett.s3.eu-west-3.amazonaws.com/img/img/main_dishes/carbonara.jpg",
      text: "Eat your favorite Carbonara pasta for only 200 uah!",
      subtext: "The promotional offer is valid from 20.03 to 27.03.2022",
    },
    {
      image:
        "https://supericebuckett.s3.eu-west-3.amazonaws.com/img/img/salads/salat.jpg",
      text: "Order any salad and get the second one for free!",
      subtext: "The promotional offer is valid from 08.01 to 22.03.2022",
    },
    {
      image:
        "https://supericebuckett.s3.eu-west-3.amazonaws.com/img/img/main_dishes/fish.jpg",
      text: "Totally fish dinner for only 300 uah!",
      subtext:
        "The promotional offer is valid every Thursday from 12-00 to 15-00",
    },
  ];
  const settings = {
    dots: true,
    // autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => (
      <div>
        <img src={images[i].image} alt="paging" className="customPaging" />
      </div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((item) => (
<<<<<<< HEAD
          <div key={new Date()} className="imageWrapper">
=======
          <div className="imageWrapper" key={new Date()}>
>>>>>>> 7ac6e2d7df90df53ea77c53d827eb2b4e58691f0
            <img src={item.image} alt="foodImage" />
            <div className="textOffer">
              <p className="mainTextOffer">{item.text}</p>
              <p className="textsubOffer">{item.subtext}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Carousel;
