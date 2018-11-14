import React, { Suspense, Component } from 'react';
import { Button } from 'semantic-ui-react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Icon } from 'semantic-ui-react';

class UserInfo extends Component {
  constructor(){
  super()
  this.state = {
    details: {}
  }
  this.upVote = this.upVote.bind(this)
}

  upVote(){
    console.log(this.state.details  )
    console.log("upvoting");
    fetch(`http://localhost:8080/users/profile/upvote/${this.props.match.params.userId}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        details: data
      })
    })
    .catch(err => console.log(err))
    console.log(this.props.match.params.userId);
  }

  componentDidMount() {
      fetch(`http://localhost:8080/users/profile/${this.props.match.params.userId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          details: data
        })
      })
      .catch(err => console.log(err))
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
      <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
    </div>

    return (
      <div>
        <br/><br/>
    <Suspense fallback={loadingImg}>
        <div class="container" style={{border:'2px solid'}}>
          <div class="row" style={{backgroundColor:'blue'}}>
            <center>
            <img class="img-rounded" alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMNPszBzrblPa1wEIpULUqm9W2tDJpDL6lcz5cr6yZSpBjiVhTw"/>
            </center>
          </div>
          <br/><br/>
          <div class="row" style={{fontSize:'30px'}}>
            <SvgIcon><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></SvgIcon> {this.state.details.firstname} {this.state.details.lastname}
          </div><br/>
          <div class="row" style={{fontSize:'20px'}}>
          <div class="col-lg-4 col-md-12 col-sm-12"><Icon name='address book'/>{this.state.details.email}</div>
          <div class="col-lg-4 col-md-12 col-sm-12"><Icon name='address book'/>{this.state.details.contactNo}</div>
          <div class="col-lg-4 col-md-12 col-sm-12"><Icon name='address book'/>{this.state.details.college}</div>
          </div><br/><br/>
        <div class="row info" style={{fontSize:'20px', lineHeight:'2', marginLeft:'10px', marginRight:'10px'}}>
            <i>{this.state.details.about}</i>
        </div><br/><br/>
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12" style={{fontSize:'18px'}}><Icon name='chart pie'/>AlumniTracker credits: <b>{this.state.details.upvotes}</b></div>
          <div class="col-lg-4 col-md-12 col-sm-12"></div>
          <div class="col-lg-4 col-md-12 col-sm-12"></div>
        </div><br/>
      <div class="row"><Button primary onClick={this.upVote} style={{marginLeft:'10px'}}>Give Credits</Button></div><br/>
    </div><br/>
      </Suspense>
      </div>
    );
  }
}

export default UserInfo;
