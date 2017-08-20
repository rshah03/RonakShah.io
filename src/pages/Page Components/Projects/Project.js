import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import ProjectItem from './ProjectItem';

class Project extends Component {
  render() {
    return (
      <div>
        <Card.Group>
          <ProjectItem cardColor='red' projectName='Weather-Up' />
          <Card fluid color='orange' header='Option 2' />
          <Card fluid color='yellow' header='Option 3' />
        </Card.Group>
      </div>
    );
  }
}

export default Project;