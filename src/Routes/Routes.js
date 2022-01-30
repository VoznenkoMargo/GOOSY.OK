import React from "react";
import { Route, Switch } from "react-router-dom";
import CategorysPage from "../pages/CategorysPage/CategorysPage";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";
import ProductsPage from "../pages/ProductsPage";
import PrivacyPolicyPage from "../pages/FooterPages/PrivacyPolicyPage";
import UserAgrPage from "../pages/FooterPages/UserAgrPage/UserAgrPage";
import AboutPage from "../pages/FooterPages/AboutPage/AboutPage";
import PaymentAndDeliveryPage from "../pages/FooterPages/PaymentAndDeliveryPage/PaymentAndDeliveryPage";

function Routes(){

    return(

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/products/:itemNo" component={ItemPage} />
            <Route exact path="/categorys" component={CategorysPage} />

            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/agreement" component={UserAgrPage} />
            <Route exact path="/confidentiality" component={PrivacyPolicyPage} />

            <Route exact path="/payment-and-delivery" component={PaymentAndDeliveryPage} />
        </Switch>
       
    );
}

export default Routes;
