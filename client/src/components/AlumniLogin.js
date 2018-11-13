import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Select, TextArea } from 'semantic-ui-react';


class AlumniLogin extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        fetch('http://localhost:8080/users/alumniLogin', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
              })
            })
            .then(res => res.json())
            .then(response => {
                console.log('login response: ')
                console.log(response)
                localStorage.setItem('jwtToken', response.token);
                if (response.token) {
                    console.log("ALl OK")
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.username,
                        data: response.details
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/alumniProfile'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
      if (this.state.redirectTo) {
        return <Redirect to = {{ pathname: this.state.redirectTo}} />
      }
      else
      {
        return(
          <div className="container">
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div class="row">
              <div class="col-md-12 col-lg-4 col-sm-12">
              </div>
              <div class="col-md-12 col-lg-4 col-sm-12" style={{border:'3px solid blue'}}>
                <br/><br/>
                <center style={{color:'blue'}}><h1> ALUMNI LOGIN </h1></center><br/><br/>
                <br/><br/>
                <Form id="loginform" onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>UserName</label>
                    <input name="username" placeholder="username" value = {this.state.username} onChange={this.handleChange}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
                  </Form.Field><br/><br/>
                  <center><Button type='submit' style={{backgroundColor:'blue', color:'white'}}>Login</Button></center><br/><br/><br/><br/><br/><br/><br/>
                </Form>
              </div>
              <div class="col-md-12 col-lg-4 col-sm-12">
              </div>
            </div>
          </div>
      )
    }
    }
  }

  export default AlumniLogin
