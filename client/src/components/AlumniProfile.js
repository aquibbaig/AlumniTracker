import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Header, Button, Image, Divider, Grid, Container} from 'semantic-ui-react';
import Home from './Home';
import SearchProfile from './SearchProfile'
import AlumniSideBar from './AlumniSideBar'

class AlumniProfile extends Component {
  constructor(){
    super();
    // this.state = {
    //   firstname : '',
    //   lastname : '',
    //   gender : '',
    //   username : '',
    //   email : '',
    //   contactNo : '',
    //   country : '',
    //   city : '',
    //   expertise : '',
    //   about : ''
    // }
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

// componentDidMount() {
//   console.log(this.props);
//   this.setState({
//     firstname : this.props.userdata.firstname,
//     lastname : this.props.userdata.lastname,
//     gender : this.props.userdata.gender,
//     username : this.props.userdata.username,
//     email : this.props.userdata.email,
//     contactNo : this.props.userdata.contactNo,
//     country : this.props.userdata.country,
//     city : this.props.userdata.city,
//     expertise : this.props.userdata.expertise,
//     about : this.props.userdata.about
//   })
// }

// componentDidUpdate(prevProps) {
//     console.log(prevProps);
//     console.log(this.props);
//     if(this.props.userdata !== prevProps.userdata) {
      // this.setState({
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
      // })

  //   }
  // }

render(){
  if(this.props.loggedIn == true){
    //data is present in the state of the component
  return(
    <div>
      <Container>
        <br />
        <br />
        <br />
        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column width={4}>
              <AlumniSideBar curr="connect" />
            </Grid.Column>
            <Grid.Column width={9}>
              <SearchProfile profiles={this.props.profiles}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button color="green" href="http://www.localhost:3001/">Community</Button>
        <Button color="red" onClick={this.logout}>LogOut</Button>
      </Container>
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

export default AlumniProfile;
