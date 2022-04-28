import React from "react";
import Helmet from "react-helmet";

import "@fontsource/exo/700.css";
import "@fontsource/yrsa";
import Navbar from "../components/Navbar";
import "./all.sass";
import "./bootstrap.css";
import "./post-bootstrap.sass";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Pro-tect Fire Door Services" />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
