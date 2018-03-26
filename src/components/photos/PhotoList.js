import React, { Component } from 'react'
import Photo from './Photo'

class PhotoList extends Component {
  render() {
      const { data } = this.props
    return (
      <div className="row">
        {
          data && data.map(d => {
              return (
                  <Photo key={d.id} data={d} />
              )
          })
        }
      </div>
    )
  }
}

export default PhotoList