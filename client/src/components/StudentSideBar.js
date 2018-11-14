import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const StudentSideBar = ({curr}) => {
  return (
    <div>
      <Menu vertical>
        <Link to="/studentProfile"><Menu.Item name='Connect' active={curr === 'Connect'}>Connect</Menu.Item></Link>
        <Link to="/jobs"><Menu.Item name='jobs' active={curr === 'jobs'}>Jobs and Internships</Menu.Item></Link>
        <Link to="/studentNewPost"><Menu.Item name='NewPost' active={curr === 'NewPost'}>Post Here</Menu.Item></Link>
        <Link to="/feedStudent"><Menu.Item name='PublicFeed' active={curr === 'PublicFeed'}>Public Feed</Menu.Item></Link>
        <Menu.Item name='help' active={curr === 'help'}>Ask for help</Menu.Item>
      </Menu>
      </div>
  );
};

export default StudentSideBar;
