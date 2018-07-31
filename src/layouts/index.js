import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import './bootstrap.css';
import './post-bootstrap.sass'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Pro-tect Fire Door Services" />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
