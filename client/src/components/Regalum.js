import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Form, Checkbox, Select } from 'semantic-ui-react';
import { countryOptions, ExpertiseOptions, cityList } from '../common';
import 'whatwg-fetch';

const GenderOptions = [
  { key: 'm', text: 'Male', value: 'Male' },
  { key: 'f', text: 'Female', value: 'Female' },
]


class Regalum extends Component {
  constructor(){
    super()
    this.state = {
      firstname: '',
      lastname :'',
      username :'',
			password: '',
			confirmPassword: '',
			about:'',
      gender:'',
      contactNo:'',
      email:'',
      country:'',
      city:'',
      expertise: [],
      workplace: ''

    }
    // this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
    this.handleExpertise = this.handleExpertise.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
  }

  handleGenderChange(event, value) {
    this.setState({
      gender: value.value
    })
  }

  handleCountryChange(event, value) {
    this.setState({
      country: value.value
    })
  }

  handleCityChange(event, value) {
    this.setState({
      city: value.value
    })
  }

  handleExpertise(event, value) {
    let arr = value.value
    console.log(arr);
    this.setState({
      expertise: arr
    })
  }

  handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  handleSubmit() {
    console.log(this.state);
    fetch('http://localhost:8080/alumni', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => {
        console.log(res);
      })
  }

  render() {
    return (
      <Container>
        <br />
        <h1><center> Alumni Registration </center></h1>
      <Form id="regAlum" onSubmit={this.handleSubmit}>
        <h3> Personal Details : </h3>
      <Form.Group widths='equal'>
        <Form.Field>
          <label>First Name</label>
          <input name="firstname" placeholder="FirstName" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="lastname" placeholder="LastName" onChange={this.handleChange}/>
        </Form.Field>
      </Form.Group>
       <Form.Select fluid label='Gender' name="gender" options={GenderOptions} placeholder='Gender' onChange={this.handleGenderChange} />
       <Form.TextArea name="about" value={this.state.about} label='About' placeholder='Tell us more about you...' onChange={this.handleChange} />
       <h3> Contact Details : </h3>
       <Form.Field>
         <label>Contact No.</label>
         <input name="contactNo" type="tel" placeholder="Contact Number" value = {this.state.contactNo} onChange={this.handleChange}/>
       </Form.Field>
       <Form.Field>
         <label>Email ID</label>
         <input name="email" placeholder="Email ID" value = {this.state.email} onChange={this.handleChange}/>
       </Form.Field>
      <label><b>Location :</b></label>
      <div class = "equal width fields">
      <Select fluid name="country" label='Country' search options={countryOptions} placeholder='Country' onChange={this.handleCountryChange} />
        <Select fluid name="city" label='City' search options={cityList} placeholder='City' onChange={this.handleCityChange} />
      </div>

      <h3>Workplace and Expertise : </h3>
      <label><b>Workplace</b></label>
      <input name="workplace"  placeholder="Your Workplace or Company" value={this.state.workplace} onChange={this.handleChange}/>
      <label><b>Expertise</b></label>
      <Form.Select placeholder='Expertise' search fluid multiple selection options={ExpertiseOptions} onChange={this.handleExpertise} />
    <h3> Account Details : </h3>
        <Form.Field>
          <label>UserName</label>
          <input name="username" placeholder="username" value = {this.state.username} onChange={this.handleChange}/>
        </Form.Field>
    <Form.Group widths='equal'>
      <Form.Field>
        <label>Password</label>
        <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>Confirm Password</label>
        <input name="confirmpassword" type="password" placeholder="ReType Your Password" onChange={this.handleChange}/>
      </Form.Field>
    </Form.Group>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>


        <Button type='submit'>SignUp</Button>
      </Form>
    </Container>
    );
  }
}

export default Regalum;
