import React, { Component } from 'react'

class Photo extends Component {
  render() {
    const { data } = this.props
    return (
        <div>
            <h4>
                {data.albumId} | {data.title}
            </h4>
            <img src={data.thumbnailUrl} alt="Album Thumbnail" />
        </div>
    )
  }
}

export default Photo