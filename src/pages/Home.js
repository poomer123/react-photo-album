import React, { Component } from 'react';

class Home extends Component {
  state = { age: 0}
  render() {
    return (
      <div>
        <h1>อายุ: {this.state.age} ปี</h1>
        <button onClick={this.upAge}>+ อายุ</button>
        <button onClick={this.downAge}>- อายุ</button>
      </div>
    )
  }


  upAge = () => {
    this.setState((ps) => {
        return {
            age: ps.age + 1 
            
        }
    })
  }

  downAge = () => {
    this.setState((ps) => {
        return {
            age: ps.age - 1
        }
    })
  }
}

export default Home;