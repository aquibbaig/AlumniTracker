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
      <div className = "container-fluid" style={{background:'blue',padding:'100px', height:'850px'}}>
      <center>
      <div style={{marginTop:'100px'}}>
        <p style={{fontSize:'60px',color:'white'}}>People, Institute, Jobs, Community.<br/>.. AlumniTracker</p>
        <Button as="a" color='green' href="/regstud">Register as a Student</Button>
        <Button as="a" color='white' href="/studentLogin">Login as a Student</Button>
        <br/><br/>
        <Button as="a" color='green' href="/regalum">Register as an Alumni</Button>
        <Button as="a" color='white' href="/alumniLogin">Login as an Alumni</Button>

      </div>
      </center>
      </div>
    );
  }
  }
}

export default Home;
