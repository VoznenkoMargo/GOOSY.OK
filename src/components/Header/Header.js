/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { GiGoose } from "react-icons/gi";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import Contact from "./Contact/Contact";
import CartBtn from "./CartBtn/CartBtn";
import Search from "./Search/Search";
import FormLogin from "../Form/FormLogin";
import FormReg from "../Form/FormReg";
import { getFromLS } from "../../utils/localStorage";
import { clearSearchItemsCreator } from "../../store/actionCreators/searchItemsCreator";
import {
  getCartCreator,
  getLsCartCreator,
  syncCartCreator
} from "../../store/actionCreators/cartItemsCreator";
import HeartFromWishlist from "../HeartFromWishlist/HeartFromWishlist";
import Categories from "../Categories/Categories";
import { getUserWishlist } from "../../store/actionCreators/wishlistItemsCreator";
import SignOutBtn from "./SignOutBtn/SignOutBtn";

const ukraine =
  "https://icons.iconarchive.com/icons/icons-land/vista-flags/256/Ukraine-Flag-2-icon.png";

function Header() {
  const location = useLocation();
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isSigned, setSign] = useState(false);
  const [userName, setUserName] = useState(false);
  const dispatch = useDispatch();
  const home = useRouteMatch("/");
  const products = useRouteMatch("/products");
  useEffect(() => {
    if (getFromLS("authToken")) {
      setSign(true);
      setUserName(getFromLS("userName"));
    } else {
      setSign(false);
    }
  }, []);

  const authToken = getFromLS("authToken");
  const lsCart = getFromLS("cart")

  useEffect(() => {
    if (authToken) {
      dispatch(getCartCreator());
      dispatch(getUserWishlist());
      dispatch(syncCartCreator(lsCart))
    }
  }, [authToken]);

  useEffect(() => {
    if (getFromLS("cart")) {
      dispatch(getLsCartCreator(lsCart.products || lsCart.cartItems))
    }
  }, [authToken]);

  useEffect(() => {
    if (setUserName(getFromLS("userName"))) {
      setUserName(getFromLS("userName"));
    }
  }, [userName]);


  const openSignIn = () => {
    setSignInOpen(true);
  };

  const closeSignIn = () => {
    document.body.style.overflow = "unset";
    setSignInOpen(false);
  };

  const openSignUp = () => {
    setSignUpOpen(true);
  };

  const closeSignUp = () => {
    document.body.style.overflow = "unset";
    setSignUpOpen(false);
  };

  return (
    <div id="header">
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
            <li className={styles.logo}>
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
                  <img src={ukraine} alt="ukraine" />
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
                to="#"
                href="+380672159888"
              >
                <Contact />
              </NavLink>
            </li>

            <li>
              {userName ? (
                <div className={styles.signOut}>
                  {" "}
                  <span className={styles.header_user}>
                    {" "}
                    Welcome, {userName}{" "}
                  </span>{" "}
                  <SignOutBtn setUserName={setUserName} />{" "}
                </div>
              ) : (
                <div className={styles.signInsignUp}>
                  <div
                    onClick={openSignUp}
                    className={styles.signIn}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => {}}
                  >
                    sign up
                  </div>
                  {isSignUpOpen ? (
                    <FormReg
                      setUserName={setUserName}
                      closeSignUp={closeSignUp}
                    />
                  ) : (
                    ""
                  )}

                  <div
                    onClick={openSignIn}
                    className={styles.signUp}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => {}}
                  >
                    <AccountCircleOutlinedIcon />
                    log in
                  </div>
                  {isSignInOpen ? (
                    <FormLogin
                      setUserName={setUserName}
                      closeSignIn={closeSignIn}
                    />
                  ) : (
                    ""
                  )}
                </div>
              )}
            </li>

            <li>
              <NavLink
                style={() => {
                  return {
                    textDecoration: "none",
                    color: "#cfcfcf",
                    textAlign: "center",
                  };
                }}
                to="/wishlist"
              >
                <HeartFromWishlist openSignIn={openSignIn} />
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

          {home?.isExact ? (
            <li className={styles.searchComponentMobile}>
              <Search />
            </li>
          ) : null}
          {products?.isExact ? (
            <li className={styles.searchComponentMobile}>
              <Search />
            </li>
          ) : null}
        </nav>
      </header>
      {location.pathname === "/" ? <Categories /> : ""}
    </div>
  );
}

export default React.memo(Header);
