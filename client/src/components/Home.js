import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Home extends Component {
  constructor(){
    super()
  }
  render() {
    console.log(this.props.loggedIn)
    if(this.props.loggedIn == true){
      return(
        <Redirect to = {{ pathname: '/alumniProfile'}} />
      )
    }
    else {
    return (
      <div>
        <br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <Button as="a" color='blue' href="/regstud">Register as a Student</Button><br/><br/>
        <Button as="a" color='blue' href="/regalum">Register as an Alumni</Button>
        <Button as="a" color='blue' href="/alumniLogin">Login as an Alumni</Button>
      </div>
    );
  }
  }
}

export default Home;
