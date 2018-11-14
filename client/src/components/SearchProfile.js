import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SearchInput, {createFilter} from 'react-search-input'
import '../styles/react-search-input.css'
import {Card, Image, Container, Button, Icon, Divider} from 'semantic-ui-react'

const KEYS_TO_FILTERS = ['firstname', 'city']

class SearchProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render() {
    const filteredEmails = this.props.profiles.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <Container>
        <SearchInput className='search-input' onChange={this.searchUpdated}/>
        <br />
        <br />
        <br />
        <Card.Group>
          {
            filteredEmails.map(profile => {
              return (
                <Container>
                  <Divider />
                <div class = "row">
                  <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' size ='small' circular />
                  <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <Card>
                    <Card.Content>
                      <Link to={`/users/${profile.username}`}>
                      <Card.Header>{profile.firstname} {profile.lastname}</Card.Header>
                    </Link>
                      <Card.Meta>
                        <span className='date'>{profile.about}</span>
                      </Card.Meta>
                          <Icon name='chart pie'/><span><b> Credits : </b>{profile.upvotes} </span>
                      <Card.Description>based in {profile.city}</Card.Description>
                    </Card.Content>
                  </Card>
                  <br />
                  <br />
                  <br />

                </div>
              </Container>
              )}
            )}
        </Card.Group>
      </Container>
    )
  }

  searchUpdated(term) {
    this.setState({searchTerm: term})
  }
}

export default SearchProfile;
