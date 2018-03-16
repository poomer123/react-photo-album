import React, { Component } from 'react';
import Header from './components/layouts/Header'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import User from './pages/User'
import Album from './pages/Album'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/album/:id" component={Album} />
        </div>

      </div>
    );
  }
}

export default App;
