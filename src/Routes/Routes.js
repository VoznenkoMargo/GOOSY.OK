import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";
import ProductsPage from "../pages/ProductsPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/products/:itemNo" component={ItemPage} />
      <Route exact path="/categories" component={CategoriesPage} />
      {/* <Route exact path="/categoreis/coldsnacks" component={C} */}
    </Switch>
  );
}

export default Routes;
