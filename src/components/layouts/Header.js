import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

class Header extends Component {
  state = {
    isOpen: true
  }
  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand className="mr-auto">Header</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.isOpen} navbar>
            {this.renderLinks()}
          </Collapse>
        </Navbar>
      </div>
    );
  }

  renderLinks = () => {
    if (localStorage.getItem('access-token')) {
      return (
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/user">Photo</Link></li>
          <li className="nav-item"><a className="nav-link" href="" onClick={this.signOut}>ออกจากระบบ</a></li>
        </ul>
      )
    }
  }

  signOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('access-token')
    this.props.history.push('/signin')
  }
}

export default withRouter(Header)
