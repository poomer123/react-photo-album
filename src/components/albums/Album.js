import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Album extends Component {
  render() {
    const { data } = this.props
    return (
        <h4>
            <Link to={`/photo/${data.id}?albumName${data.title}`}>{data.id}. {data.title}</Link>
        </h4>
    )
  }
}

export default Album