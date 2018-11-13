import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SearchInput, {createFilter} from 'react-search-input'
import '../styles/react-search-input.css'
import {Card, Image, Container, Button} from 'semantic-ui-react'

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
        <Card.Group>
          {
            filteredEmails.map(profile => {
              return (
                  <Card>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMNPszBzrblPa1wEIpULUqm9W2tDJpDL6lcz5cr6yZSpBjiVhTw' />
                    <Card.Content>
                      <Link to={`/users/${profile.username}`}>
                      <Card.Header>{profile.firstname} {profile.lastname}</Card.Header>
                    </Link>
                      <Card.Meta>
                        <span className='date'>{profile.about}</span>
                      </Card.Meta>
                      <Card.Description>based in {profile.city}</Card.Description>
                    </Card.Content>
                  </Card>
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
