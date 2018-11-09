import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background-color: #0877A0;
  color:white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0877A0;
  border-radius: 3px;
`;


class Home extends Component {
  render() {
    return (
      <div>
        <br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <Button as="a" href="/regstud">Register as a Student</Button><br/><br/>
        <Button as="a" href="/regalum">Register as an Alumni</Button>
      </div>
    );
  }
}

export default Home;
