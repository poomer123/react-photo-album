import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Album extends Component {
  render() {
    const { data } = this.props
    return (
        <li className="list-group-item">
            <Link to={`/photo/${data.id}?albumName${data.title}`}>{data.id}. {data.title}</Link>
        </li>
    )
  }
}

export default Album