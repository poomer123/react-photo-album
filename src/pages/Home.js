import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>อายุ: {this.props.age} ปี</h1>
        <button onClick={this.props.upAge}>+ อายุ</button>
        <button onClick={this.props.downAge}>- อายุ</button>
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