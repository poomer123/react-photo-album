import React, { Component } from 'react'

class Album extends Component {
  render() {
    const { data } = this.props
    return (
        <h4>
            {data.id}. {data.title}
        </h4>
    )
  }
}

export default Album