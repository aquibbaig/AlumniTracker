import React from 'react';
import StudentSideBar from './StudentSideBar'
import { Grid, Card, Container } from 'semantic-ui-react';

const items = [
  {
    header: 'Backend Developer - SwapCard',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: '55k-65k',
  },
  {
    header: 'UI/UX Developer - NowFloats',
    description: 'Design awesome user experiences',
    meta: '30k-40k',
  },
  {
    header: 'Research Intern - IISc Bangalore',
    description: 'AI in day to day activities',
    meta: '25k-35k',
  },
  {
    header: 'Project Manager - gnani.ai',
    description: 'Bring to the table win-win strategies for AI in everyday life',
    meta: '50k-60k',
  },
]

const Jobs = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <Grid columns={2} >
        <Grid.Row>
          <Grid.Column width={4}>
            <StudentSideBar curr="jobs" />
          </Grid.Column>
          <Grid.Column width={9}>
            <Card.Group centered items={items} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Jobs;
