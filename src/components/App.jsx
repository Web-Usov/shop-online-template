import React, { Component } from 'react';
import Routers from 'routers'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    );
  }
}

export default App;
