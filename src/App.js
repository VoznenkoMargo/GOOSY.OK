import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import Carousel from "./components/carousel/Carousel";
import Item from "./components/Item/Item";
import store from "./store";
import Footer from "./components/Footer/Footer/Footer";


function App() {
  return (
      <Provider store={store}>
        <Router>
          <div className="App">
              <Carousel />
              <Item/>
              <Footer/>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
