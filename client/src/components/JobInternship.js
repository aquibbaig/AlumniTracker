import React from 'react';
import StudentSideBar from './StudentSideBar'
import { Grid, Card, Container } from 'semantic-ui-react';

const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
]

const Jobs = () => {
  return (
    <Container>
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
