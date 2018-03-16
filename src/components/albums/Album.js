import React, { Component } from 'react'

class Album extends Component {
  render() {
    const { data } = this.props
    return (
        <h4>
            {data.title}
        </h4>
    )
  }
}

export default Album