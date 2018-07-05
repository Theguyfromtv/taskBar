import React, { Component } from "react";
import "./App.css";
import  {BrowserRouter as Router,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Auth from './pages/Auth/Auth'
import Tasklist from "./pages/Tasklist/Tasklist"

class App extends Component {
  state={
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'component={Auth}/>
            <Route exact path='/tasks'component={Tasklist}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
