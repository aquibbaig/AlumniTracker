import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { Form, Button, TextArea, Container, Divider} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {categoryOptions} from '../common';
import StudentSideBar from './StudentSideBar';

class newPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: '',
      category: '',
      username: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCategoryChange(event, value) {
    this.setState({
      category: value.value
    })
  }

  handleSubmit(event) {
    let d = new Date().toString()
    console.log(d.slice(0,24));
    console.log(this.state)
    fetch('http://localhost:8080/newpost', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        post: this.state.post,
        date: d,
        category: this.state.category,
        username: this.state.username,
        email: this.state.email
      })
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({
      username : this.props.userdata.username,
      email : this.props.userdata.email
    })
  }

  render() {
    return (
      <div>
      <StudentSideBar curr="NewPost" />
      <Container>
      <Divider />
      <Form id="submitform" onSubmit={this.handleSubmit}>
      <Form.Field>
      <TextArea name="post" placeholder="Write something" onChange={this.handleChange}/>
      </Form.Field>
      <Form.Select fluid label='Category' name="category" options={categoryOptions} placeholder='Category' onChange={this.handleCategoryChange} />
      <Button type='submit'>Submit</Button>
      </Form>
      </Container>
      </div>
    );
  }
}

export default newPost;
