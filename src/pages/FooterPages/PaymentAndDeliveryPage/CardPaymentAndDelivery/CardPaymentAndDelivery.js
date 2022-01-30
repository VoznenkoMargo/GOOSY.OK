import React from 'react';
import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {ReactComponent as Terminal} from '../../../../assets/svg/bank-terminal.svg';
import {ReactComponent as Online} from '../../../../assets/svg/online-shop.svg';
import {ReactComponent as Courier} from '../../../../assets/svg/courier.svg';
import {ReactComponent as Smartphone} from '../../../../assets/svg/hand-graving-smartphone.svg';
import {ReactComponent as CallCenter} from '../../../../assets/svg/call-center.svg';
import {ReactComponent as Shopping} from '../../../../assets/svg/shopping-man.svg';
import {ReactComponent as Clock} from '../../../../assets/svg/clock.svg';
import {ReactComponent as Free} from '../../../../assets/svg/free-delivery.svg';
import {ReactComponent as Contactless} from '../../../../assets/svg/stop.svg';
import {ReactComponent as Pickup} from '../../../../assets/svg/car.svg';
import styles from './CardPaymentAndDelivery.module.scss'


 function CardPaymentAndDelivery(props) {
     const {title, text, terminal, online, courier, smartphone, callCenter, shopping, clock, free, contactless, pickup} = props;

    const svgContainer = { maxWidth: 300, minHeight: 80, textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }

  return (
    <Card sx={{ maxWidth: 300, background: "#d7d7d7" }}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {title}
        </Typography>

        {smartphone ? <Typography component="div" sx={svgContainer}>
        <Smartphone className={styles.card_icon} />
        </Typography> : null }

        {callCenter ? <Typography component="div" sx={svgContainer}>
        <CallCenter className={styles.card_icon} />
        </Typography> : null }

        {shopping ? <Typography component="div" sx={svgContainer}>
        <Shopping className={styles.card_icon} />
        </Typography> : null }

        {clock ? <Typography component="div" sx={svgContainer}>
        <Clock className={styles.card_icon} />
        </Typography> : null }

        {free ? <Typography component="div" sx={svgContainer}>
        <Free className={styles.card_icon} />
        </Typography> : null }

        {contactless ? <Typography component="div" sx={svgContainer}>
        <Contactless className={styles.card_icon} />
        </Typography> : null }

        {pickup ? <Typography component="div" sx={svgContainer}>
        <Pickup className={styles.card_icon} />
        </Typography> : null }

        {courier ? <Typography variant="h5" component="div" sx={svgContainer}>
        <Courier className={styles.card_icon} />
        </Typography> : null }

        {online ? <Typography variant="h5" component="div" sx={svgContainer}>
        <Online className={styles.card_icon} />
        </Typography> : null }

        {terminal ? <Typography variant="h5" component="div" sx={svgContainer}>
        <Terminal className={styles.card_icon} />
        </Typography> : null }

        <Typography variant="body2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

CardPaymentAndDelivery.propTypes = {
  title: PropTypes.string,
  text:PropTypes.string, 
   terminal: PropTypes.bool, 
   online: PropTypes.bool, 
   courier: PropTypes.bool, 
   smartphone: PropTypes.bool, 
   callCenter: PropTypes.bool, 
   shopping: PropTypes.bool, 
   clock: PropTypes.bool, 
   free: PropTypes.bool, 
   contactless: PropTypes.bool, 
   pickup: PropTypes.bool
}

CardPaymentAndDelivery.defaultProps = {
   title: "",
   text: "Information is not available", 
   terminal: false, 
   online: false, 
   courier: false, 
   smartphone: false, 
   callCenter: false, 
   shopping: false, 
   clock: false, 
   free: false, 
   contactless: false, 
   pickup: false
}

export default CardPaymentAndDelivery;