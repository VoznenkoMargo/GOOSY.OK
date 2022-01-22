import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import image1 from "../../assets/spahetti.jpg";
// import image2 from "../../assets/salad.jpg";
// import image3 from "../../assets/fish.jpg";
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
      text: "Ешь  любимую пасту Карбонара всего за 200 грн!",
      subtext: "Акционное предложение действует в период с 20.03 по 27.03.2022",
    },
    {
      image:
        "https://supericebuckett.s3.eu-west-3.amazonaws.com/img/img/salads/salat.jpg",
      text: "Заказывай любой салат и получи второй бесплатно!",
      subtext: "Акционное предложение действует в период с 08.01 по 22.03.2022",
    },
    {
      image:
        "https://supericebuckett.s3.eu-west-3.amazonaws.com/img/img/main_dishes/fish.jpg",
      text: "Тотально рыбный обед всего за 300 грн!",
      subtext:
        "Акционное предложение действует каждый четверг c 12-00 до 15-00",
    },
  ];
  const settings = {
    dots: true,
    // autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => (
      <div>
        <img src={images[i].image} alt="" className="customPaging" />
      </div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((item) => (
          <div className="imageWrapper">
            <img src={item.image} alt="" />
            <div className="textOffer">
              <p>{item.text}</p>
              <p className="textsubOffer">{item.subtext}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Carousel;

SamplePrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
