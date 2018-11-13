import React, {Component} from 'react';
import Home from './Home';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Regalum from './Regalum';
import Regstud from './Regstud';
import Search from './Search';
import AlumniLogin from './AlumniLogin';
import AlumniProfile from './AlumniProfile'
import StudentLogin from './StudentLogin';
import StudentProfile from './StudentProfile';
import NewPost from './newPost';
import SearchProfile from './SearchProfile'
import Jobs from './JobInternship';
import {AlumniCategoryOptions} from '../common';
import {StudentCategoryOptions} from '../common';
import Events from './Events';
import Feed from './Feed';
import UserInfo from './UserInfo';
import 'whatwg-fetch';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn : false,
      username : null,
      data : {},
      profiles: []
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
    this.getProfiles()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getProfiles() {
    fetch('http://localhost:8080/users/all/profiles', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.setState({
          profiles: res
        })
      })
      .catch(err => console.log(err))
  }


  getUser() {
    let token = localStorage.getItem('jwtToken');
    console.log(token)
    fetch('http://localhost:8080/users/' + token ,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => {
      console.log('Get user response: ')
      //response = decoded object {username:'username'}
      console.log(response, "this")
      if (response.username) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.username,
          data: response.details
        })
      } else {
        console.log('Get user: no user');
        console.log(response);
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render = {() => <Home loggedIn={this.state.loggedIn} /> } />
            <Route exact path="/regstud" component={Regstud}/>
            <Route exact path="/regalum" component={Regalum}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/studentNewpost" render={() => <NewPost updateUser={this.updateUser} loggedIn={this.state.loggedIn} userdata={this.state.data} name="student" options={StudentCategoryOptions} /> } />
            <Route exact path="/alumniNewpost" render={() => <NewPost updateUser={this.updateUser} loggedIn={this.state.loggedIn} userdata={this.state.data} name="alumni" options={AlumniCategoryOptions} /> } />
            <Route exact path="/alumniLogin" render={() => <AlumniLogin updateUser={this.updateUser} />} />
            <Route exact path="/studentLogin" render={() => <StudentLogin updateUser={this.updateUser} />} />
            <Route exact path="/alumniProfile" render={() => <AlumniProfile updateUser={this.updateUser} loggedIn={this.state.loggedIn} userdata={this.state.data} profiles={this.state.profiles}/>} />
            <Route exact path="/studentProfile" render={() => <StudentProfile updateUser={this.updateUser} loggedIn={this.state.loggedIn} userdata={this.state.data} profiles={this.state.profiles}/>} />
            <Route exact path="/searchProfile" render={() => <SearchProfile profiles={this.state.profiles} /> } />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/events" component={Events} />
            <Route path="/users/:userId" component={UserInfo} />
            <Route exact path="/feed" component={Feed} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
