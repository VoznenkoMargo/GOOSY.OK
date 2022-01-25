import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import Carousel from "./components/carousel/Carousel";
import Item from "./components/Item/Item";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

import store from "./store";


function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Carousel />
              <Item/>
              <CategoriesPage/>
          </div>
      </Provider>
  );
}

export default App;
