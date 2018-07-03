import React, { Component } from "react";
import "./App.css";
import  {BrowserRouter as Router,Route,} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Auth from './pages/Auth/Auth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'component={Auth}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
