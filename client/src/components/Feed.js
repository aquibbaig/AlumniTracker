import React, {Component} from 'react';
import {Card, Button, TextArea, Container, Header, Grid} from 'semantic-ui-react';
import StudentSideBar from './StudentSideBar';
import 'whatwg-fetch';

class Feed extends Component {
  constructor(){
    super()
    this.state = {
      posts : []
    }
  }

  componentDidMount() {
    console.log("component mounted")
    fetch('http://localhost:8080/users/all/posts', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        posts : res
      })
    }).catch(error => {
      console.log(error)
    })
  }
  render() {

    return(
      <Container>
        <br />
        <br />
        <br />
        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column width={4}>
              <StudentSideBar curr="PublicFeed" />
            </Grid.Column>
            <Grid.Column width={9}>
            {this.state.posts.reverse().map(post => (
                    <Card>
                      <Card.Content>
                        <Card.Header>{post.username} {post.email}</Card.Header>
                        <Card.Meta>
                          <span className='date'>{post.post}</span>
                        </Card.Meta>
                        <Card.Description><b>Category: </b>{post.category}</Card.Description>
                      </Card.Content>
                    </Card>
                  ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Feed;
