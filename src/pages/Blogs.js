import React from 'react';
import Link from 'gatsby-link';
import { Divider, Grid, Header } from 'semantic-ui-react';
import Blog from './Page Components/Blog/Blog';

const Blogs = () =>
  <div>
    <Header as="h1" textAlign="center">BLOG</Header>
    <Blog />
  </div>;

export default Blogs;
