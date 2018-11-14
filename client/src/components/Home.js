import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Typing from 'react-typing-animation'
import { Card, Icon } from 'semantic-ui-react'

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
      <div>
      <div className = "container-fluid" style={{backgroundImage:`url(${"./back.jpeg"})`,padding:'100px', height:'950px', backgroundSize:'cover'}}>
      <center>
      <div style={{marginTop:'100px'}} class="container-fluid">
        <p style={{fontSize:'65px',color:'white'}}>
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
        <Button as="a" className="btn btn-success" color='green' href="/alumniLogin" style={{fontSize:'20px'}}>Login as an Alumni</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button as="a" className="btn btn-success" color='green' href="/studentLogin" style={{fontSize:'20px'}}>Login as a Student</Button>
        <br/><br/>

        <i><a style={{color:'white', fontSize:'20px'}} href="/regalum"><u>Register as an Alumni</u></a></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i><a style={{color:'white', fontSize:'20px'}} href="/regstud"><u>Register as a Student</u></a></i>

        </div>
      </center>
      </div>
      <div className="container-fluid">
        <br/>

      </div>
      </div>
    );
  }
  }
}

export default Home;
