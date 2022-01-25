import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CategorysPage from "./pages/CategorysPage/CategorysPage";
import store from "./store";
import Header from "./components/Header/Header";


function App() {
  return (
      <Provider store={store}>
        <Router>
        <div className="App">
          <Header/>
          <Switch>  
            <Route exact path="/" component={HomePage}/>
          </Switch>
          <Switch>  
            <Route exact path="/categorys" component={CategorysPage}/>
          </Switch>
        </div>
        </Router>
      </Provider>
  );
}

export default App;
