import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import './bootstrap.css';
import './post-bootstrap.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Pro-tect Fire Door Services" />
    <Navbar />
    <div style={{marginTop:'50px'}}>{children}</div>
  </div>
)

export default TemplateWrapper
