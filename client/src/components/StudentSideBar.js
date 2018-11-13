import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const StudentSideBar = ({curr}) => {
  return (
      <Menu vertical>
        <Link to="/studentProfile"><Menu.Item name='feed' active={curr === 'feed'}>Feed</Menu.Item></Link>
        <Link to="/jobs"><Menu.Item name='jobs' active={curr === 'jobs'}>Jobs and Internships</Menu.Item></Link>
        <Menu.Item name='help' active={curr === 'help'}>Ask for help</Menu.Item>
      </Menu>
  );
};

export default StudentSideBar;
