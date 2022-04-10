import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Preloader from "../components/Preloader/Preloader";
import PrivacyPolicyPage from "../pages/FooterPages/PrivacyPolicyPage";
import UserAgrPage from "../pages/FooterPages/UserAgrPage/UserAgrPage";
import AboutPage from "../pages/FooterPages/AboutPage/AboutPage";
import PaymentAndDeliveryPage from "../pages/FooterPages/PaymentAndDeliveryPage/PaymentAndDeliveryPage";
import NewsAndEventsPage from "../pages/FooterPages/NewsAndEventsPage/NewsAndEventsPage";
import CardNewsAndEventsGoosePage from "../pages/FooterPages/NewsAndEventsPage/CardNewsAndEventsGoosePage/CardNewsAndEventsGoosePage";
import CardNewsAndEventsMasterPage from "../pages/FooterPages/NewsAndEventsPage/CardNewsAndEventsMasterPage/CardNewsAndEventsMasterPage";
import CardNewsAndEventsSitePage from "../pages/FooterPages/NewsAndEventsPage/CardNewsAndEventsSitePage/CardNewsAndEventsSitePage";
import CardNewsAndEventsWorkingPage from "../pages/FooterPages/NewsAndEventsPage/CardNewsAndEventsWorkingPage/CardNewsAndEventsWorkingPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage";

const ProductsPage = React.lazy(() => import("../pages/ProductsPage"));
const ItemPage = React.lazy(() => import("../pages/ItemPage"));
const CartPage = React.lazy(() => import("../pages/CartPage"));
const CategoriesPage = React.lazy(() =>
  import("../pages/CategoriesPage/CategoriesPage")
);
const WishlistPage = React.lazy(() =>
  import("../pages/WishlistPage/WishlistPage")
);

function Routes() {
  return (
    <Suspense fallback={<Preloader />}>
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
        <Route exact path="/news-and-events" component={NewsAndEventsPage} />
        <Route
          exact
          path="/news-and-events/Goose Day"
          component={CardNewsAndEventsGoosePage}
        />
        <Route
          exact
          path="/news-and-events/Site in a test mode"
          component={CardNewsAndEventsSitePage}
        />
        <Route
          exact
          path="/news-and-events/Master Class"
          component={CardNewsAndEventsMasterPage}
        />
        <Route
          exact
          path="/news-and-events/Working hours during the holidays"
          component={CardNewsAndEventsWorkingPage}
        />
        <Route exact path="/wishlist" component={WishlistPage} />
        <Route exact path="/order" component={OrderPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
