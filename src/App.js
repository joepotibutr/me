import React, { Component } from 'react';
import Home from './containers/Home/home'
import About from './containers/About/about'
import Projects from './containers/Projects/projects'
import Sidenav from './components/sidenav/sidenav'
import {Background } from './App.style'
import {BrowserRouter as Router , Route } from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <Router>
        
    <div>
     
       <Background>
         <Sidenav/>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/projects" component={Projects}/>
       </Background>
      

      
      
    </div>
  
    </Router>
    );
  }
}

export default App;
