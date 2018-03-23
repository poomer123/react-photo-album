import React, { Component } from 'react';
import Header from './components/layouts/Header'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from "./PrivateRoute";
import Home from './pages/Home'
import User from './pages/User'
import Album from './pages/Album'
import Photo from './pages/Photo'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/user" component={User} />
            <PrivateRoute path="/album/:id" component={Album} />
            <PrivateRoute path="/photo/:id" component={Photo} />
            <Route path="/signin" component={Signin} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
