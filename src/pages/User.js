import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../actions'
import UserList from '../components/users/UserList'

class User extends Component {
  // state = { data: null, err: null }

  componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => {
  //         if( res.ok ) {
  //           return res
  //         }
  //         throw Error(res.status)
  //     })
  //     .then(rs => rs.json())
  //     .then(rs => this.setState({ data: rs }))
  //     .catch( e => this.setState({ err: e.message }))
    this.props.dispatch(loadUsers())
  }

  render() {
    // const { data, err } = this.state
    const { users } = this.props
    console.log(users)
    let list = <div>Loading...</div>

    // if(data) {
    //   if(data.length > 0) {
    //     list = <UserList data={data} />
    //   } else {
    //     list = <h4>No Data</h4>
    //   }
    // }

    // if(err) {
    //   list = <h4>เกิดข้อผิดพลาด : {err}</h4>
    // }

    if(users && users.length > 0) {
      list = <UserList data={users} />
    }


    return (
      <div>
        <h1>User</h1>
        {list}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users : state.users
  }
}

export default connect(mapStateToProps)(User)