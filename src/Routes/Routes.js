import React from "react";
import { Route, Switch } from 'react-router-dom';
import HomePage from "../pages/HomePage";
// import ItemPage from "../pages/ItemPage";
// import ProductsPage from "../pages/ProductsPage";

function Routes(){

    return(
        <Switch>
            <Route exact path="/" component={HomePage}/>
            {/* <Route exact path="/products" component={ProductsPage}/>
            <Route exact path="/products/:itemNo" component={ItemPage}/> */}
        </Switch>
    );
}

export default Routes;
