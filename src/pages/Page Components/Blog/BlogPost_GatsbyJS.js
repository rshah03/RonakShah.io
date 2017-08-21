import React, { Component } from 'react';
import { Grid, Card, Modal, Header, Button } from 'semantic-ui-react';
import BlogPostSummary from '../BlogPostSummary';

class BlogPost_GatsbyJS extends Component {
  render() {
    return (      
      <div>
        <Modal 
          trigger={
            <span>
              <BlogPostSummary
                postTitle={this.props.postTitle}
                metaInfo={this.props.postDate}
                postDesc={this.props.postDescription} 
              />
            </span>
          }
        >
          <Modal.Header>{this.props.postTitle}</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Hello</Header>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, rerum possimus iure itaque quam amet et aut quidem reprehenderit facere aliquid numquam natus! Quia voluptas, laboriosam voluptatibus molestiae quos! Repellendus.</p>
              </div>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default BlogPost_GatsbyJS;