import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Header, Button, Image, Divider } from 'semantic-ui-react';
import Home from './Home';

class StudentProfile extends Component {
  constructor(){
    super();
    this.state = {
      firstname : '',
      lastname : '',
      gender : '',
      username : '',
      email : '',
      contactNo : '',
      country : '',
      city : '',
      expertise : '',
      about : ''
    }
    this.logout = this.logout.bind(this)
  }


logout(event){
  event.preventDefault();
    localStorage.removeItem('jwtToken');
    fetch('http://localhost:8080/users/logout', {
      method : "POST"
    }).then(response => {
      console.log(response)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
        console.log('Logout error')
    })
}

componentDidMount() {
  console.log(this.props);
  this.setState({
    firstname : this.props.userdata.firstname,
    lastname : this.props.userdata.lastname,
    gender : this.props.userdata.gender,
    username : this.props.userdata.username,
    email : this.props.userdata.email,
    contactNo : this.props.userdata.contactNo,
    country : this.props.userdata.country,
    city : this.props.userdata.city,
    expertise : this.props.userdata.expertise,
    about : this.props.userdata.about
  })
}

// componentDidUpdate(prevProps) {
//     console.log(prevProps);
//     console.log(this.props);
//     if(this.props.userdata !== prevProps.userdata) {
//       this.setState({
        // firstname : this.props.userdata.firstname,
        // lastname : this.props.userdata.lastname,
        // gender : this.props.userdata.gender,
        // username : this.props.userdata.username,
        // email : this.props.userdata.email,
        // contactNo : this.props.userdata.contactNo,
        // country : this.props.userdata.country,
        // city : this.props.userdata.city,
        // expertise : this.props.userdata.expertise,
        // about : this.props.userdata.about
  //     })
  //
  //   }
  // }

render(){
  if(this.props.loggedIn == true){
    //data is present in the state of the component
  return(
    <div>
      <Header as = "h1">{this.state.username} </Header>
      <p> {this.state.about} </p>

      <Button color="red" onClick={this.logout}>LogOut</Button>
    </div>
  );
}
else {
  {
    return(
      <Home />
    )
  }
}
}
}

export default StudentProfile;
