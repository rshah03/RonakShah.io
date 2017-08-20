import React, { Component } from 'react';
import { Menu, Icon, Grid } from 'semantic-ui-react';
import Link from 'gatsby-link';
import './../Styles/index.scss';

class MainNavbar extends Component {
  render() {
    return (
      <div className="animated slideInDown">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Menu pointing borderless className="navBar">
                <Menu.Menu>
                  <Menu.Item className="menuItem nameTitle">
                    <span className="developerTag">Ronak Shah<Icon name="chevron right"/></span>
                  </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                  <Menu.Item className="menuItem"><Icon name="github" /><a href="https://github.com/rshah03" target="_blank">Github</a></Menu.Item>
                  <Menu.Item className="menuItem"><Icon name="linkedin" />LinkedIn</Menu.Item>
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
    // return (
    //   <div>
    //     <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
    //     <Menu pointing inverted className="test">
    //       <Menu.Item className="link"><Link to="/">Page 1</Link></Menu.Item>
    //       <Menu.Item className="link"><Link to="/page-2/">Page 2</Link></Menu.Item>
    //       <Menu.Item>Javascript Link</Menu.Item>
    //     </Menu>
    //   </div>
    // );
  }
}

export default MainNavbar;