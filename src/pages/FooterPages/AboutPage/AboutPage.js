import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './AboutPage.module.scss'

function AboutPage() {
  return <div className={styles.about}>
       <div className={styles.about_back}>
        <Link to="/">
        <FontAwesomeIcon icon={faChevronCircleLeft} size="5x" className={styles.about_chevron_left}/>
        </Link>       
            <span>To main</span>
      </div>   
        <h2>About company</h2>
        <p className={styles.about_slogan}>GOOSY.OK! - The Queen of Goose</p>
        <h3>OUR COMPANY</h3>
        <p>Company «GOOSY.OK» works market food delivery in Kiev in 2021. For us it is very important, that you remain happy with the taste of our products and to food delivery was carried out for 60 minutes no matter where in the city you are.</p>
        <p>We will try to make our menu had dishes for every taste. More than 25 kinds of goose stuffed with rich and unique opportunity to create your own recipe for goose . In addition, we offer delicious salads, hot dishes, desserts and beverages . Each dish is prepared only after receipt of the order , so we guarantee that the goose and other dishes will be delivered to you hot and salads - fresh and tasty.</p>
        <p>At the same time the cost of meals in «GOOSY.OK» accessible to everyone. We also offer discounts and special offers for large orders . Goosy delivery - free of charge. Treat yourself , your family and friends a delicious hot goose cooked by the best chefs and hand especially for you!</p>
        <p>Order dishes you can make in any convenient way for you : online or by contacting our operator on the phone. Goosy Delivery in Kiev carried out within an hour ! We are confident that by ordering dishes «GOOSY.OK» once you become our regular Customers.</p>
        <h3>WE ARE GRATEFUL TO OUR CUSTOMERS!</h3>
        <p>The most important and valuable and important in our work is our Clients.</p>
        <p>Very important for us to know the opinion about product quality , speed and service. This we can only know from our Customers !</p>
        <p>Our Clients teach us how to become better , they help us develop and improve.</p>
        <p>These people pay their money and they expect that the food was tasty , and quick delivery . Try very hard , because they are our Customers !</p>
        <p>Each Customer for us is a VIP person , so every order for our Client is urgent, with the best quality products and service!</p>
        <h3>Contacts</h3>
        <p>You can order delivery using this website, mobile application or by numbers:</p>
        <p>067 215 98 88</p>
        <p>099 888 77 66</p>
        <p>Do you want to offer cooperation? Are you looking for work or having any ideas for us? Please send a mail to the appropriate department and our specialists will contact you to discuss the details.</p>
        <p>Jobs and vacancies in GOOSY.OK!</p>
        <p>hr@goosyok.ua</p>
        <p>Suggestions for products, utensils, packaging, etc.</p>
        <p>tehnolog@goosyok.ua</p>
        <p>Advertising, PR</p>
        <p>dellead@goosyok.ua</p>
        <p>Feedback and suggestions</p>
        <p>comments@goosyok.ua</p>
    </div>;
}

export default AboutPage;
