import React, { Component } from 'react'

class Photo extends Component {
  render() {
    const { data } = this.props
    return (
        <div className="col-3">
            <div className="card">
                <img className="card-img-top" src={data.thumbnailUrl} alt="Album Thumbnail" />
                <div className="card-body">
                <h5 className="card-title">{data.albumId} | {data.title}</h5>      
                </div>
            </div>
        </div>
    )
  }
}

export default Photo