import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Routes from "./Routes/Routes";
import store from "./store";
import Footer from "./components/Footer/Footer/Footer";
import ScrollToTop from "./Routes/ScrollToTop";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";
// import FormLogin from "./components/FormLogin/FormLogin";




function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <div className="main_content">
           
            <Routes />
          </div>
          <Footer />
          <ScrollToTopBtn />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
