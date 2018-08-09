import React from 'react'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';
import { Link } from 'gatsby';


export default class Example extends React.Component {
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
          <Link to='/' className='navbar-brand'>Pro-Tect Ltd</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="btn-lg nav-link" to='/about/'>About Us</Link>
              </NavItem>
              <NavItem>
                <Link to='/contact-us/'><Button color="danger" size="lg">Contact Us</Button></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}