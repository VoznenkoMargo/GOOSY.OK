import React, {useState} from "react";
import { GiGoose } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Contact from "./Contact/Contact";
import CartBtn from "./CartBtn/CartBtn";
import Search from "./Search/Search";
import Categories from "../Categories/Categories";
import FormLogin from "../FormLogin/FormLogin";
import FormReg from "../FormReg/FormReg";




function Header() {






  const [isSignInOpen, setSignInOpen] = useState(false)

  const [isSignUpOpen, setSignUpOpen] = useState(false)

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
      
    <header  className={styles.root}>
      <nav>
        <ul>
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
              <div className={styles.logo}>
                <GiGoose />
                <h1 className={styles.logoText}>goosy.ok</h1>
              </div>
            </NavLink>
          </li>

          <li className={styles.searchComponent}>
            <Search />
          </li>

          <li className={styles.contact}>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/contact">            
              <Contact />
            </NavLink>
          </li>

          <li className={styles.contact}>
              <div className={styles.signInsignUp}>
                <span  onClick={openSignIn} className={styles.signIn} role='button' tabIndex={0} onKeyPress={()=>{}}>Sign in</span>
                {isSignInOpen ?  <FormLogin  closeSignIn={closeSignIn}/>    : '' }
                <span onClick={openSignUp} className={styles.signUp} role='button' tabIndex={0} onKeyPress={()=>{}}>Sign up</span> 
                {isSignUpOpen ?  <FormReg  closeSignUp={closeSignUp}/>    : '' }
              </div>
          </li>

          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              activeClassName={styles.active}
              to="/cart">            
              <CartBtn />
            </NavLink>
          </li>
        </ul>
        <div className={styles.searchComponentMobile}>
            <Search />
        </div>
      </nav>
      
    </header>
    <Categories />
    </div>
  );
}

export default Header;
