import React from "react";
import PropTypes from "prop-types";
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
      subtext: "The promotional offer is valid from 20.03 to 11.05.2022",
    },
    {
      image:
        "https://www.state.gov/wp-content/uploads/2018/11/Ukraine-2109x1406.jpg",
      text: "Lunches for the defenders of  Ukraine are free",
      subtext: "Every day from Monday to Sunday from 12:00 to 3:00",
    },
    {
      image:
        "https://supericebuckett.s3.eu-west-3.amazonaws.com/img/img/salads/salat.jpg",
      text: "Order any salad and get the second one for free!",
      subtext: "The promotional offer is valid from 08.01 to 23.06.2022",
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
          <div className="imageWrapper" key={new Date()}>
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

SamplePrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SamplePrevArrow.defaultProps = {
  className: "",
  onClick: ()=>{}
}

SampleNextArrow.defaultProps = {
  className: "",
  onClick: ()=>{}
}
export default Carousel;
