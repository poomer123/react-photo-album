import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class User extends Component {
  render() {
      const { data } = this.props
    return (
      <li className="list-group-item">
          <Link to={`/album/${data.id}?username=${data.name}`}>{data.name} | {data.email}</Link>
      </li>
    )
  }
}

export default User