import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import './bootstrap.css';
import './post-bootstrap.sass'


export default ({ children }) => (
  <div>
    <Helmet title="Pro-tect Fire Door Services" />
    <Navbar />
    <div>{children}</div>
  </div>
)

