import React, { Component } from "react";
import "./App.css";
import Photos from "./containers/Photos";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Modal from './containers/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/:id" exact component={Modal}/>
        <Route path="/" exact component={Photos}/>
        <Route render={() => (<h1>404 : Not Found</h1>)}/>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
