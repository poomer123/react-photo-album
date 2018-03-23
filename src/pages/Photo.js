import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadPhotos } from '../actions'
import PhotoList from '../components/photos/PhotoList'

class Photo extends Component {

    componentDidMount() {
        this.props.dispatch(loadPhotos(this.props.match.params.id))
    }

  render() {
    // console.log(this.props)
    // console.warn(this.props.match.params.id)

    const search = new URLSearchParams(this.props.location.search).get('albumName')
    // console.log(search)

    console.log(this.props)
    const { photos } = this.props
    console.warn(photos)

    console.log(this.props)
    console.warn(photos)

    let list = <div>Loading...</div>

    if (!photos.isFailed && photos.data) {
        if (!photos.isLoading) {
            if(photos.data.length > 0) {
                list = <PhotoList data={photos.data} />
            } else {
                list = <h4>No Data</h4>
            }
        }
    }

    if (photos.isFailed) {
        list = <h4>เกิดข้อผิดผลาด : {photos.data}</h4>
    }

    return (
      <div>
        <h1>Photo by Album ID : {this.props.match.params.id} | {search}</h1>
        {list}
      </div>
    )
  }
}


function mapStateToProps(state) {
    return {
        photos: state.photos
    }
}

export default connect(mapStateToProps)(Photo)