import React, { Component } from 'react';
import { Header, Footer, Main} from 'components'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
