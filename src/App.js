import React from "react";
import "./App.scss";

import Carousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";



function App() {
  return (
    <div className="App">
      <Carousel />
      <Categories />
    </div>
  );
}

export default App;
