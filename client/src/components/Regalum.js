import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Form, Checkbox } from 'semantic-ui-react';
import { countryOptions } from '../common'
import { ExpertiseOptions } from '../common'

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
      skills: [],

    }
    // this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleGender = this.handleGender.bind(this)
    this.handleMultiple = this.handleExpertise.bind(this)
  }

  handleGender(event, value) {
    this.setState({
      gender: value.value
    })
  }

  handleExpertise(event, value) {
    let arr = [...this.state.expertise,...value.value]
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
  }

  render() {
    return (
      <Container>
        <h1><center> Alumni Registration! </center></h1>
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
       <Form.Select fluid label='Gender' name="gender" options={GenderOptions} placeholder='Gender' onChange={this.handleGender} />
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
      <Form.Select fluid name="country" label='Country' search options={countryOptions} placeholder='Country' onChange={this.handleChange} />
      <Form.Field>
        <label>City</label>
        <input name="city"  placeholder="Your Work City" value={this.state.city} onChange={this.handleChange}/>
      </Form.Field>
      </div>
      <h3> Expertise And Skills : </h3>
      <label><b>Expertise</b></label>
      <Form.Select placeholder='Expertise' search fluid multiple selection options={ExpertiseOptions} onChange={this.handleExpertise} />
    <h3> Login Credentials : </h3>
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
