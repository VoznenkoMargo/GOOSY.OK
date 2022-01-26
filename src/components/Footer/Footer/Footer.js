import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import FooterInfo from '../FooterInfo/FooterInfo';
import FooterNav from '../FooterNav/FooterNav';
import styles from './Footer.module.scss';
import FooterSocial from '../FooterSocial/FooterSocial';


function Footer() {
  return <div className={styles.footer}><div className={styles.footer_container}>
  <FontAwesomeIcon icon={faChevronCircleUp} size="5x" className={styles.footer_chevron}/>
  <FooterInfo />
  <FooterNav />
  <FooterSocial/>
</div>
<p className={styles.footer_rights}>© ООО «GOOS.OK» Все права защищены. 2021 - 2022</p>
</div>
  
}

export default Footer;
