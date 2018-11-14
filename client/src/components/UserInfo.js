import React, { Suspense, Component } from 'react';

class UserInfo extends Component {
  state = {
    details: {},
  };

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
  }

  render() {
    const loadingImg = <div className="album-img">
      <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
    </div>

    return (
      <div>
        <br />
        <br />
      <Suspense fallback={loadingImg}>
        <div>{this.state.details.about}</div>
        <div>{this.state.details.email}</div>
        <div>{this.state.details.firstname} {this.state.details.lastname} </div>
        <div>{this.state.details.contactNo}</div>
        <div>{this.state.details.college}</div>
      </Suspense>
      </div>
    );
  }
}

export default UserInfo;
