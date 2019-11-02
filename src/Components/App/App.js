import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import Login from '../LoginRegister/Login';
import Home from '../Home/Home';
import AuthenticationComponent from '../LoginRegister/AuthenticationComponent';
import Register from '../LoginRegister/Register';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <AuthenticationComponent>
          <Route exact path="/home" component={Home}/>
          <Route path="/report" component={Home}/>
          <Route path="/masterdata" component={Home}/>
          <Route path="/accountsetting" component={Home}/>
          </AuthenticationComponent>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;