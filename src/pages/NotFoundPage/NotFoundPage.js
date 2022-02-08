import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  return <div className={styles.notFoundPage}>
       
        <Link to="/">
        <FontAwesomeIcon icon={faHome} size="3x" className={styles.notFoundPage_home} />
        <span>Go Home</span>
        </Link>
        
  </div>;
}

export default NotFoundPage;
