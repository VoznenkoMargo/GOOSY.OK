/* eslint-disable react/self-closing-comp */
import React from "react";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import styles from "./PaymentAndDeliveryPage.module.scss";
import CardPaymentAndDelivery from "./CardPaymentAndDelivery/CardPaymentAndDelivery";

function PaymentAndDeliveryPage() {
  return (
    <div className={styles.payment_and_delivery}>
      <div className={styles.payment_and_delivery_back}>
        <ArrowBack />
      </div>
      <h2>Payment And Delivery</h2>
      <p>
        Delivery is valid throughout the city. Therefore, you can feel the best
        and most exquisite taste of food, anywhere in the city, wherever you
        are.
      </p>
      <p>
        For free delivery, you need to make an order for an amount of 500 UAH,
        the cost of delivery for orders less than 500 UAH is 50 UAH.
      </p>
      <p>
        Check the minimum order amount or the cost of delivery outside the city
        with the operator.
      </p>
      <p>There is no minimum order amount for pickup.</p>
      <p>
        Dear Customers! Thank you for choosing us! If you place an order in our
        company for the first time and the amount of your order is equal to or
        exceeds 1500 UAH. forced to ask you to make a partial or full payment of
        your order before sending it to the preparation. The amount of the
        prepayment can be from 20 to 100 percent of the value of your order.
        Prepayment can be made in any way convenient for you. The most
        convenient and optimal option is to pay on-line on our official website.
        With subsequent orders in our company, prepayment is no longer
        necessary. Thanks in advance for your understanding.
      </p>

      <h3>How to place an order</h3>
      <div className={styles.card_block}>
        <CardPaymentAndDelivery
          smartphone="true"
          text="You can place an order on the website or by calling our phone +380 (067) 215-98-88"
        />
        <CardPaymentAndDelivery
          callCenter="true"
          text="You can order a call back and the operator will contact you in near time."
        />
        <CardPaymentAndDelivery
          shopping="true"
          text="You can also place an order on the site yourself."
        />
      </div>

      <h3>Payment And Delivery</h3>
      <div className={styles.card_block}>
        <CardPaymentAndDelivery
          clock="true"
          title="WE WORK FROM 10 TO 23:00"
          text="When placing an order, the operator will tell you the exact time of delivery. Depending on the workload of the kitchen, weather conditions and traffic jams, the delivery time may be changed! Delivery time takes 30-60 minutes depending on your location. The operator will tell you the exact time. We start preparing food immediately after confirming the order."
        />
        <CardPaymentAndDelivery
          free="true"
          title="FREE SHIPPING"
          text="When ordering from 500 UAH, unless otherwise specified on the Delivery Zone map below."
        />
        <CardPaymentAndDelivery
          contactless="true"
          title="CONTACTLESS DELIVERY"
          text="After agreeing on the order with the operator, he will send you a card for payment, or after paying online through the LiqPay system on our website, and after the money is credited to the account, we will send you a courier with the order. The courier leaves the order at your door and moves 5 meters away from the door. You pick up your order yourself and close the door."
        />
        <CardPaymentAndDelivery
          pickup="true"
          title="PICKUP BY YOURSELF"
          text="If you pick up your order yourself, you will get 10% cashback to your bonus account. Address: Pavla Tychyna, 1v."
        />
      </div>

      <h3>How to pay for an order</h3>
      <div className={styles.card_block}>
        <CardPaymentAndDelivery
          courier="true"
          title="CASH COURIER"
          text="You can pay for the order to the courier upon receipt. Please check with the operator when placing an order if you need change."
        />
        <CardPaymentAndDelivery
          online="true"
          title="ONLINE"
          text="Payment can be made with a Visa and MasterCard payment card of any bank. In this case, the online payment service LiqPay is used."
        />
        <CardPaymentAndDelivery
          terminal="true"
          title="TERMINAL"
          text="Payment can be made using a mobile terminal upon receipt of an order. Please specify this method of payment to the operator when placing an order."
        />
      </div>

      <h3>Delivery Zones</h3>
      <p>We deliver dishes in Kiev from 10:00 to 23:00 without holidays.</p>
      <div className={styles.delivery_zones}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1W7TaM9XXDjjv8tLIohA0c_0Uem2GJlSQ&hl=en&ehbc=2E312F"
          width="70%"
          height="450"
          title="Kyiv"
          frameBorder="0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default PaymentAndDeliveryPage;
