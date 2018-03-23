import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        {this.renderLinks()}
      </div>
    );
  }

  renderLinks = () => {
    if (localStorage.getItem('access-token')) {
      return (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">Photo</Link></li>
          <li><a href="" onClick={this.signOut}>ออกจากระบบ</a></li>
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
