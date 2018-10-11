import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import asyncComponent from "./AsyncComponent";

const PagUno = asyncComponent(() => import("./page_one"));

class App extends Component {
  render() {
    return (
        <BrowserRouter basename={'/demo'}>
          <Switch>
            <Route exact path="/" component={PagUno}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
