import React from 'react';
import Link from 'gatsby-link';
import { Divider, Grid, Header } from 'semantic-ui-react';
import Projects from './Page Components/Projects/Project';

const SecondPage = () =>
  <div>
    <Header as="h1" textAlign="center">PROJECTS</Header>
    <Projects />
  </div>;

export default SecondPage;
