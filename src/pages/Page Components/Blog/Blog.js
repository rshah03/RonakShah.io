import React, { Component } from 'react';
import { Grid, Card, Modal, Header } from 'semantic-ui-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//Import blog posts
import BlogPost_GatsbyJS from './ActualBlogPosts/BlogPost_GatsbyJS';
import BlogPost_TDD from './ActualBlogPosts/BlogPost_TDD';
import BlogPost_TerminalStyling from './ActualBlogPosts/BlogPost_TerminalStyling';


class Blog extends Component {
  render() {
    return (
      <div className="animated slideInUp">
        <Grid centered doubling divided stackable columns={3}>
          <Grid.Row>
            <Grid.Column>
              <BlogPost_GatsbyJS
                postTitle={'Gatsby. J(s), Gatsby.'}
                postDate={'August 1, 2017'}
                postDescription={'Discovered a static site generator called GatsbyJS'} />
            </Grid.Column>
            <Grid.Column>
              <BlogPost_TDD 
                postTitle={'TDD, The Savior.'}
                postDate={'May 12, 2017'}
                postDescription={'Breaking down my first time working with TDD'}
              />
            </Grid.Column>
            <Grid.Column>
              <BlogPost_TerminalStyling 
                postTitle={`Lookin' Good, Terminal.`}
                postDate={'May 24, 2017'}
                postDescription={`Terminals don't have to be so boring. Spend some time, make it look good!`}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

}


export default Blog;