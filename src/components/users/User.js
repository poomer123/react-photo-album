import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class User extends Component {
  render() {
      const { data } = this.props
    return (
      <h3>
          <Link to={`/album/${data.id}?username=${data.name}`}>{data.name} | {data.email}</Link>
      </h3>
    )
  }
}

export default User