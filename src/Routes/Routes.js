import React from "react";
import { Route, Switch } from 'react-router-dom';
import CategorysPage from "../pages/CategorysPage/CategorysPage";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage/CartPage";

function Routes(){

    return(
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/products" component={ProductsPage}/>
            <Route exact path="/products/:itemNo" component={ItemPage}/>
            <Route exact path="/categorys" component={CategorysPage}/>
            <Route exact path="/cart" component={CartPage}/>
        </Switch>
    );
}

export default Routes;
