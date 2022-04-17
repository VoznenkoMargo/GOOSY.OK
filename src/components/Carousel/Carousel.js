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
        "https://supericebuckett.s3.eu-west-3.amazonaws.com/carousel/carusel/carusel/carbonarabaner.webp",
      text: "Eat your favorite Carbonara pasta for only 200$!",
      subtext: "The promotional offer is valid from 20.03 to 11.05.2022",
    },
    {
      image:
        "https://supericebuckett.s3.eu-west-3.amazonaws.com/carousel/carusel/carusel/Ukrainebaner.webp",
      text: "Lunches for the defenders of  Ukraine are free! Slava Ukraini!",
      subtext: "Every day from Monday to Sunday",
    },
    {
      image:
        "https://supericebuckett.s3.eu-west-3.amazonaws.com/carousel/carusel/carusel/salatbaner.webp",
      text: "Order any salad and get the second one for free!",
      subtext: "The promotional offer is valid from 08.01 to 23.06.2022",
    },
    {
      image:
        "https://supericebuckett.s3.eu-west-3.amazonaws.com/carousel/carusel/carusel/fishbaner.webp",
      text: "Totally fish dinner for only 300$!",
      subtext: "The promotional offer is valid every Thursday",
    },
  ];
  const settings = {
    dots: true,
    autoplay: true,
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
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SamplePrevArrow.defaultProps = {
  className: "",
  onClick: () => {},
};

SampleNextArrow.defaultProps = {
  className: "",
  onClick: () => {},
};

export default React.memo(Carousel);
