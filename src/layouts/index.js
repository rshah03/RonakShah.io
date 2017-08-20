import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import 'semantic-ui-css/semantic.min.css';
import MainNavbar from './MainNavbar';
import PagesNavbar from './PagesNavbar';

import Styles from './../Styles/index.scss';

const Header = () =>
  <div>
    <NavbarLayout />
  </div>;

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <MainNavbar pages={children()}/>
    <PagesNavbar />
    <div
      style={{
        margin: '2em auto',
        maxWidth: 'auto',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      
      {children()}
    </div>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
