import React, {useEffect, useState} from "react";

import { useDispatch } from "react-redux";
import { GiGoose } from "react-icons/gi";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import Contact from "./Contact/Contact";
import CartBtn from "./CartBtn/CartBtn";
import Search from "./Search/Search";

import FormLogin from "../FormLogin/FormLogin";
import FormReg from "../FormReg/FormReg";
import { getFromLS } from "../../utils/localStorage";
import { clearSearchItemsCreator } from "../../store/actionCreators/searchItemsCreator";
import HeartFromWishlist from "../HeartFromWishlist/HeartFromWishlist";
import Categories from "../Categories/Categories";
import SignOutBtn from "./SignOutBtn/SignOutBtn";



function Header() {
  const location = useLocation();
  
  const [isSignInOpen, setSignInOpen] = useState(false)

  const [isSignUpOpen, setSignUpOpen] = useState(false)

  // const [isSigned, setSign] = useState(false)

  const [userName, setUserName] = useState(false)

  const dispatch = useDispatch();
  const home = useRouteMatch("/");
  const products = useRouteMatch("/products");

  // useEffect(()=>{
  //  if(getFromLS('authToken')){
  //   setSign(true)
  //   setUserName(getFromLS('userName'))
  //  }else{
  //   setSign(false)
     
  //  }
  // },[])

  useEffect(()=>{
    if(setUserName(getFromLS('userName'))){
      setUserName(getFromLS('userName'))
    }
   },[userName])

  const openSignIn = ()=>{
    setSignInOpen(true)
  }

  const closeSignIn = () => {
    setSignInOpen(false)
   
   }

   const openSignUp = ()=>{
    setSignUpOpen(true)
  }
  
  const closeSignUp = () => {
    setSignUpOpen(false)
   
   }


  
  return (
    <div id='header'>
    <header className={styles.root}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.burger}>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/products"
            >
              <div className={styles.burger}>
                <GiGoose />
                <p>menu</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/"
            >
              <div
                aria-hidden
                className={styles.logo}
                onClick={() => dispatch(clearSearchItemsCreator())}
              >
                <GiGoose />
                <h1 className={styles.logoText}>goosy.ok</h1>
              </div>
            </NavLink>
          </li>
          {home?.isExact ? (
            <li className={styles.searchComponent}>
              <Search />
            </li>
          ) : null}
          {products?.isExact ? (
            <li className={styles.searchComponent}>
              <Search />
            </li>
          ) : null}

          <li className={styles.contact}>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/contact"
            >
              <Contact />
            </NavLink>
          </li>

          <li className={styles.contact}>
          {userName ? <div> <span className={styles.header_user}> Weclome, {userName} </span>  <SignOutBtn setUserName={setUserName} /> </div> :
              <div className={styles.signInsignUp}>
                <span  onClick={openSignUp} className={styles.signIn} role='button' tabIndex={0} onKeyPress={()=>{}}>Sign up</span>
                {isSignUpOpen ?  <FormReg  closeSignUp={closeSignUp}/>    : '' }

                <span onClick={openSignIn} className={styles.signUp} role='button' tabIndex={0} onKeyPress={()=>{}}>Sign in</span> 
                {isSignInOpen ?  <FormLogin setUserName={setUserName}  closeSignIn={closeSignIn}/>    : '' }
              </div>
            }
          </li>

          <li>
            <NavLink
              style={() => {
                return {
                  textDecoration: "none",
                  color: "#cfcfcf",
                }}}
              to="/wishlist">            
              <HeartFromWishlist />
            </NavLink>
          </li>

          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/cart"
            >
              <CartBtn />
            </NavLink>
          </li>
        </ul>

        
        <div className={styles.searchComponentMobile}>
          <Search />
        </div>
      </nav>
      
    </header>
    {location.pathname === '/' ? <Categories /> : ''}
    </div>
  );
}
          

export default Header;
