import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const AlumniSideBar = ({curr}) => {
  return (
      <Menu vertical>
        <Link to="/alumniProfile"><Menu.Item name='Connect' active={curr === 'connect'}>Connect</Menu.Item></Link>
        <Link to="/events"><Menu.Item name='jobs' active={curr === 'events'}>Events</Menu.Item></Link>
        <Link to="/alumniNewPost"><Menu.Item name='NewPost' active={curr === 'NewPost'}>Post Here</Menu.Item></Link>
        <Link to="/feed"><Menu.Item name='PublicFeed' active={curr === 'PublicFeed'}>Public Feed</Menu.Item></Link>
        <Menu.Item name='help' active={curr === 'help'}>Ask for help</Menu.Item>
      </Menu>
  );
};

export default AlumniSideBar;
