import React, { Component } from 'react';
import Home from './containers/Home/home'
import About from './containers/About/about'
import Projects from './containers/Projects/projects'
import Sidenav from './components/sidenav/sidenav'
import {Background } from './App.style'
import {BrowserRouter as Router , Route} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <Router>
    <div>
     
       <Background>
         <Sidenav/>
         <Route exact path="/" component={Home}/>
       </Background>
      

      
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
    </div>
    </Router>
    );
  }
}

export default App;
