import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/Header/Header";
import Routes from "./Routes/Routes";
import store from "./store";
import Footer from "./components/Footer/Footer/Footer";


function App() {
  return (
      <Provider store={store}>
        <Router>

        <div className="App">
          <Header/>
          <Routes/>
          <Footer/>
        </div>

        </Router>
      </Provider>
  );
}

export default App;
