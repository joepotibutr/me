import React, { Component } from 'react';
import Home from './containers/Home/home'
import Sidenav from './components/sidenav/sidenav'
import {Background , BackgroundAnimation} from './App.style'



class App extends Component {
  render() {
    return (
    <div>
      <BackgroundAnimation>
       <Background>
         <Sidenav/>
         <Home/>
       </Background>
       </BackgroundAnimation>
    </div>
    );
  }
}

export default App;
