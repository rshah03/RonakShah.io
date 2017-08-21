import React, { Component } from 'react';
import { Grid, Card, Modal, Header, Button } from 'semantic-ui-react';
import BlogPostSummary from '../BlogPostSummary';

class BlogPost_TDD extends Component {
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
              <Header>Test Driven Development (TDD)</Header>
              <div>
                <i>This past Spring semester, I took a Software Design class with the reknown Dr. Venkat Subramaniam. This was the second class I had taken with him. Venkat, as he requests us to refer to him by his first name, is a huge fan of TDD. And in retrospect, it is understandable why. But at first glance TDD was rather intimidating and seemed extremely impractical.</i>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, rerum possimus iure itaque quam amet et aut quidem reprehenderit facere aliquid numquam natus! Quia voluptas, laboriosam voluptatibus molestiae quos! Repellendus.</p>
              </div>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default BlogPost_TDD;
