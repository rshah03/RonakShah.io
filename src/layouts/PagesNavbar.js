import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Menu } from 'semantic-ui-react';

class PagesNavbar extends Component {
  render() {
    return (
      <div className='pagesNavbar animated fadeIn'>
        <Menu inverted compact>
          <Menu.Item>
            <Link className="link" to='/'>ABOUT</Link>
          </Menu.Item>
          <Menu.Item>
            <Link className="link" to='/Blogs'>BLOG</Link>
          </Menu.Item>
          <Menu.Item>
            <Link className="link" to='/Projects/'>PROJECTS</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default PagesNavbar;