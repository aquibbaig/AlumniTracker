import React, {Component} from 'react';
import Home from './Home';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Regalum from './Regalum';
import Regstud from './Regstud';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/regstud" component={Regstud}/>
            <Route exact path="/regalum" component={Regalum}/>
            <Route exact path="/search" component={Search}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
