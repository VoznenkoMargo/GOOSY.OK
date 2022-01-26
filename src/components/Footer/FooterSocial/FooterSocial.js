import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faYoutubeSquare, faInstagramSquare, faFacebookSquare, faCcMastercard, faCcVisa, faCcApplePay } from '@fortawesome/free-brands-svg-icons'
import styles from './FooterSocial.module.scss'

function FooterSocial() {
  return <div className={styles.footer_social}>
      <p>Контакты</p>
      <p>+38 (099) 888-77-66</p>
      <p>+38 (067) 888-77-66</p>
      <p>Присоединяйтесь к нам</p>
      <FontAwesomeIcon icon={faTwitterSquare} size="2x" className={styles.footer_brand_icon}/>
      <FontAwesomeIcon icon={faYoutubeSquare} size="2x" className={styles.footer_brand_icon}/>
      <FontAwesomeIcon icon={faInstagramSquare} size="2x" className={styles.footer_brand_icon}/>
      <FontAwesomeIcon icon={faFacebookSquare} size="2x" className={styles.footer_brand_icon}/>
      
      <p>Принимаем к оплате</p>
      <FontAwesomeIcon icon={faCcMastercard} size="2x" className={styles.footer_pay_icon}/>
      <FontAwesomeIcon icon={faCcVisa} size="2x" className={styles.footer_pay_icon}/>
      <FontAwesomeIcon icon={faCcApplePay} size="2x" className={styles.footer_pay_icon}/>

  </div>
}

export default FooterSocial;
