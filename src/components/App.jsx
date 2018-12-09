import React, { Component } from 'react';
import { Header, Footer, Main} from 'components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <hr/>
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
