import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class ProjectItem extends Component {
  render() {
    return (
      <div>
        <Card color={this.props.cardColor} header={this.props.projectName} />
      </div>
    );
  }
}

export default ProjectItem;