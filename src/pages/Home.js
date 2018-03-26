import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>อายุ: {this.props.age} ปี</h1>
        <button className="btn btn-primary" onClick={this.props.upAge}>+ อายุ</button>{' '}
        <button className="btn btn-danger" onClick={this.props.downAge}>- อายุ</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    age: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    downAge: () => {
      dispatch({type: 'DOWNAGE'})
    },
    upAge: () => {
      dispatch({type: 'UPAGE'})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)