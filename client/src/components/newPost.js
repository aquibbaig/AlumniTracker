import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { Form, Button, TextArea, Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class newPost extends Component {
  constructor(){
    super()
    this.state = {
      post: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    let d = new Date().toString()
    console.log(d.slice(0,24));
    fetch('http://localhost:8080/newpost', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        post: this.state.post,
        date: d
      })
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>
      <Form id="submitform" onSubmit={this.handleSubmit}>
      <Form.Field>
      <TextArea name="post" placeholder="Write something" onChange={this.handleChange}/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
      </Form>
      </Container>
    );
  }
}

export default newPost;
