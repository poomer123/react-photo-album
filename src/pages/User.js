import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../actions'
import UserList from '../components/users/UserList'

class User extends Component {
  componentDidMount() {
    this.props.dispatch(loadUsers())
  }

  render() {
    const { users } = this.props
    let list = <div>Loading...</div>

    if(!users.isFailed && users.data) {
      if(users.data.length > 0) {
        list = <UserList data={users.data} />
      }
    }

    if(users.isFailed) {
      list = <h4>เกิดข้อผิดพลาด : {users.data}</h4>
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