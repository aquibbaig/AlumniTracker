import React, {Component} from 'react';
import {Card, Button, TextArea, Container, Header, Grid, Icon, Label} from 'semantic-ui-react';
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
      console.log(this.state.posts )
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
                    <Card fluid>
                      <Card.Content>

                        <Card.Header><Icon name = "user circle"></Icon>{post.username}<h5>@{post.email}</h5></Card.Header>

                        <Card.Description>
                          <span className='date' style = {{fontSize : '20px'}}><b>{post.post}</b></span>
                        </Card.Description>
                        <br />
                        <Label as='a' color="teal" tag>{post.category}</Label>
                        <br />
                        <br />
                        <Icon name="arrow circle up"></Icon>UpVote
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <Icon name="arrow circle down"></Icon>DownVote
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
