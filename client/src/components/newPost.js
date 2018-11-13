import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { Form, Button, TextArea, Container, Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import {categoryOptions} from '../common';
import StudentSideBar from './StudentSideBar';
import AlumniSideBar from './AlumniSideBar';

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

  render() {
    return (
      <Container>
        <br />
        <br />
        <br />
        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column width={4}>
              {this.props.name==="alumni"? <AlumniSideBar curr="NewPost" /> : <StudentSideBar curr="NewPost" /> }
            </Grid.Column>
            <Grid.Column width={9}>
              <Form id="submitform" onSubmit={this.handleSubmit}>
                <Form.Field>
                  <TextArea name="post" placeholder="Write something" onChange={this.handleChange}/>
                </Form.Field>
                <Form.Select fluid label='Category' name="category" options={this.props.options} placeholder='Category' onChange={this.handleCategoryChange} />
                <Button type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default newPost;
