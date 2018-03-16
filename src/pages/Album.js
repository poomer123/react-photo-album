import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadAlbums } from '../actions'
import AlbumList from '../components/albums/AlbumList'

class Album extends Component {

    componentDidMount() {
        this.props.dispatch(loadAlbums(this.props.match.params.id))
    }

  render() {
    // console.warn(this.props)

    const search = new URLSearchParams(this.props.location.search).get("username")
    // console.log(search)

    const { albums } = this.props
    // console.warn(albums)

    let list = <div>Loading...</div>

    if (!albums.isFailed && albums.data) {
        if (!albums.isLoading) {
            if(albums.data.length > 0) {
                list = <AlbumList data={albums.data} />
            } else {
                list = <h4>No Data</h4>
            }
        }
    }

    if (albums.isFailed) {
        list = <h4>เกิดข้อผิดผลาด : {albums.data}</h4>
    }

    return (
      <div>
        <h1>Album by User ID : {this.props.match.params.id} | {search}</h1>
        {list}
      </div>
    )
  }
}


function mapStateToProps(state) {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps)(Album)