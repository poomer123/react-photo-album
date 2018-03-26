import React, { Component } from 'react'
import User from './User'

class UserList extends Component {
  render() {
      const { data } = this.props
    return (
      <ul className="list-group">
        {data && data.map(d => {
            return (
                <User key={d.id} data={d} />
            )
        })}
      </ul>
    )
  }
}

export default UserList