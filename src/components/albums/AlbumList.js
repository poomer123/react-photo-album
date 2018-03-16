import React, { Component } from 'react'
import Album from './Album'

class AlbumList extends Component {
  render() {
    const { data } = this.props
    return (
        <div>
            {
                data && data.map(d => {
                    return (
                        <Album key={d.id} data={d} />
                    )
                })
            }
        </div>
    )
  }
}

export default AlbumList