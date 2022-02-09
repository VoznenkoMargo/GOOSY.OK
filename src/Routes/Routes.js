import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import PrivacyPolicyPage from "../pages/FooterPages/PrivacyPolicyPage";
import UserAgrPage from "../pages/FooterPages/UserAgrPage/UserAgrPage";
import AboutPage from "../pages/FooterPages/AboutPage/AboutPage";
import PaymentAndDeliveryPage from "../pages/FooterPages/PaymentAndDeliveryPage/PaymentAndDeliveryPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/products/filter" component={CategoriesPage} />
      <Route exact path="/products/filter/:find" component={CategoriesPage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/products/:itemNo" component={ItemPage} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/agreement" component={UserAgrPage} />
      <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route
        exact
        path="/payment-and-delivery"
        component={PaymentAndDeliveryPage}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;
