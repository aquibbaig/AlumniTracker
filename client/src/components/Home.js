import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Typing from 'react-typing-animation'

class Home extends Component {
  constructor(){
    super()
  }

  handleType(){

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
      <div className = "container-fluid" style={{background:'blue',padding:'100px', height:'600px'}}>
      <center>
      <div style={{marginTop:'100px'}}>
        <p style={{fontSize:'60px',color:'white'}}>
          <span>AlumniTracker.</span>
        <br/>
          <Typing loop="true">
            <span>People, Jobs, Institutes, Communities.</span>
            <Typing.Delay ms={1000}/>
            <Typing.Backspace count={40} />
            <span>Waiting for Internships?</span>
            <Typing.Delay ms={1000}/>
            <Typing.Backspace count={30} />
            <span>Or referals?</span>
            <Typing.Delay ms={500}/>
            <Typing.Backspace count={40} />
            <span>Register yourself now.</span>
            <Typing.Delay ms={1000}/>
          </Typing>
        </p>
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
