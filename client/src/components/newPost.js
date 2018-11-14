import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { Form, Button, TextArea, Container, Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import {categoryOptions} from '../common';
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
    // console.log(d.slice(0,24));
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
      <div class='container' >
        <br /><br /><br /><br /><br /><br /><br />
        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column width={4}>
              <StudentSideBar curr="NewPost" />

            </Grid.Column>
            <Grid.Column width={9}>
              <div class='container' style={{border:'1px solid blue'}}>
                <br /><br/>
              <Form id="submitform" onSubmit={this.handleSubmit}>
                <Form.Field>
                  <TextArea name="post" placeholder="Write something" style={{border:'1px solid'}} onChange={this.handleChange }/>
                </Form.Field><br/><br/>
              <Form.Select fluid label='Category' style={{border:'1px solid'}} name="category" options={this.props.options} placeholder='Category' onChange={this.handleCategoryChange} />
                <br/><br/>
                <center><Button type='submit'style={{backgroundColor:'blue',color:'white'}}>Submit</Button></center>
                <br/><br/><br/>
              </Form>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default newPost;
