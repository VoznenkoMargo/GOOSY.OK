import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./ScrollToTopBtn.module.scss";


function ScrollToTopBtn() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTopFunc = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={styles.scrollToTop}>
      {isVisible && 
        <div onClick={scrollToTopFunc}>
          <FontAwesomeIcon
          icon={faChevronCircleUp}
          size="3x"/>
        </div>}
    </div>
  );
}

export default  ScrollToTopBtn;