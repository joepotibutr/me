import React, { Component } from 'react';
import Home from './containers/Home/home'
import {Background} from './App.style'


class App extends Component {
  render() {
    return (
    <div>
       <Background>
     <Home/>
       </Background>
    </div>
    );
  }
}

export default App;
