import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import Item from "./components/Item/Item";
import Header from "./components/Header/Header";
import store from "./store";


function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
          <div className="App">
                <Header />
                <section>
              <Carousel />
              <Item/>
              </section>
          </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
