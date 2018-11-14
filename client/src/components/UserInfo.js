import React, {Suspense, Component} from 'react';
import {Button} from 'semantic-ui-react';
import {
  Icon,
  Image,
  Container,
  Grid,
  Header,
  Card,
  List,
  Divider
} from 'semantic-ui-react';

class UserInfo extends Component {
  constructor() {
    super()
    this.state = {
      details: {}
    }
    this.upVote = this.upVote.bind(this)
  }

  upVote() {
    console.log(this.state.details)
    console.log("upvoting");
    fetch(`http://localhost:8080/users/profile/upvote/${this.props.match.params.userId}`).then(res => res.json()).then(data => {
      this.setState({details: data})
    }).catch(err => console.log(err))
    console.log(this.props.match.params.userId);
  }

  componentDidMount() {
    fetch(`http://localhost:8080/users/profile/${this.props.match.params.userId}`).then(res => res.json()).then(data => {
      this.setState({details: data})
    }).catch(err => console.log(err));
    console.log(this.props.match.params.userId);
    // <div>{this.state.details.about}</div>
    // <div>{this.state.details.email}</div>
    // <div>{this.state.details.firstname} {this.state.details.lastname} </div>
    // <div>{this.state.details.contactNo}</div>
    // <div>{this.state.details.college}</div>
    // <div>{this.state.details.upvotes}</div>
    // <Button primary onClick={this.upVote}>Up Vote</Button>
  }

  render() {
    const loadingImg = <div className="album-img">
      <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif"/>
    </div>

    return (<div>
      <br/><br/>
      <Suspense fallback={loadingImg}>
        <Container>
          <Grid columns={2}>
            <Grid.Column width={3}>
              <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' size="small"/>
            </Grid.Column>
            <Grid.Column width={9}>
              <Card fluid>
                <Card.Content>
                  <Header>
                    {this.state.details.firstname}
                    {this.state.details.lastname}
                  </Header>
                </Card.Content>
                <Card.Content>
                  <List>
                    <List.Item icon='phone' content={this.state.details.contactNo}/>
                    <List.Item icon='mail' content={this.state.details.email}/>
                    <List.Item icon='at' content={this.state.details.college}/>
                  </List>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
          <Divider />
          <Card fluid>
            <Card.Content>
              <List>
                <List.Item icon='phone' content={this.state.details.about}/>
                <List.Item icon='address card' content={this.state.details.workplace}/>
                <List.Item icon='pie chart' content={`AlumniTracker credits: ${this.state.details.upvotes}`}/>
              </List>
            </Card.Content>
          </Card>
          <Button primary="primary" onClick={this.upVote} style={{
              marginLeft: '10px'
            }}>Give Credits</Button>
        </Container>
      </Suspense>
    </div>);
  }
}

export default UserInfo;
