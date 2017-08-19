import React, { Component } from 'react';
import Home from './containers/Home/home'
import Sidenav from './components/sidenav/sidenav'
import {Background} from './App.style'


class App extends Component {
  render() {
    return (
    <div>
       <Background>
         <Sidenav/>
         <Home/>
       </Background>
    </div>
    );
  }
}

export default App;
