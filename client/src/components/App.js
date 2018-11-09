import React, { Component } from 'react';
import Home from './Home';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Regalum from './Regalum';
import Regstud from './Regstud';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Route exact path="/" render={() => <Home/>} />
        <Route exact path="/regstud" render={() => <Regstud/>} />
        <Route exact path="/regalum" render={() => <Regalum/>} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
