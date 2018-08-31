import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import './bootstrap.css';
import './post-bootstrap.sass'
import 'typeface-exo';
import 'typeface-yrsa';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Pro-tect Fire Door Services" />
    <Navbar />
    <div style={{marginTop:'55px'}}>{children}</div>
  </div>
)

export default TemplateWrapper
