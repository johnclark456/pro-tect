import React from 'react'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';
import { Link } from 'gatsby';

import './all.sass'

export default class ProtectNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        {/* Expand means when does it convert to the toggle element */}
        <Navbar color="dark" dark expand="md" fixed="top"> 
          <Link to='/' className='navbar-brand h6'><h2>Pro-Tect Ltd</h2></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="btn-lg nav-link" to='/about'><h6>About Us</h6></Link>
              </NavItem>
              <NavItem>
                <Link to='/contact-us'><Button color="danger" size="lg"><h6>Contact Us</h6></Button></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}