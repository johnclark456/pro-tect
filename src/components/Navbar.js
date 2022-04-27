import React from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import "@fontsource/exo/500.css";
import "./all.sass";

export default class ProtectNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  close() {
    this.setState({
      isOpen: false,
    });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query logo {
            logo: file(relativePath: { eq: "Pro-tect_RGB_Transparent.png" }) {
              childImageSharp {
                gatsbyImageData(width: 250, placeholder: NONE, layout: FIXED)
              }
            }
          }
        `}
        render={(data) => (
          <div>
            {/* Expand means when does it convert to the toggle element */}
            <Navbar color="light" light expand="md" fixed="top">
              <Link to="/" className="navbar-brand">
                <GatsbyImage
                  image={data.logo.childImageSharp.gatsbyImageData}
                  alt="Pro-Tect logo"
                />
              </Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link className="btn-lg nav-link" to="/keeping-it-safe">
                      <h6>Fire Door Safety</h6>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="btn-lg nav-link" to="/certification">
                      <h6>Certification</h6>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="btn-lg nav-link"
                      to="/#news"
                      onClick={this.close}
                    >
                      <h6>News</h6>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="btn-lg nav-link" to="/about">
                      <h6>About Us</h6>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/contact-us">
                      <Button color="danger" size="lg">
                        <h6>Contact Us</h6>
                      </Button>
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )}
      />
    );
  }
}
