import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Home extends Component {
  render() {
    return (
      <div>
        <br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <Button as="a" color='blue' href="/regstud">Register as a Student</Button><br/><br/>
        <Button as="a" color='blue' href="/regalum">Register as an Alumni</Button>
      </div>
    );
  }
}

export default Home;
