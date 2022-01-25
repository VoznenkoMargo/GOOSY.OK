import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import store from "./store";


function App() {
  return (
      <Provider store={store}>
        <Router>
        <div className="App">
          <Switch>  
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </div>
        </Router>
      </Provider>
  );
}

export default App;
