import React, { Component } from 'react';
import { Card, Header, Reveal } from 'semantic-ui-react';
import '../../../Styles/BlogPostSummary.scss';

class BlogPostSummary extends Component {
  render() {
    return (
      <div className="summary-card">
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.postTitle}</Card.Header>
            <Card.Meta>{this.props.metaInfo}</Card.Meta>
            <Card.Description>{this.props.postDesc}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default BlogPostSummary;