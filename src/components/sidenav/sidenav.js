import React, { Component } from 'react';
import { SidenavToggle , SidenavBar } from './sidenav.style';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SideNav extends Component {


    render() {
    
        return (
            <div>
                <ReactCSSTransitionGroup>
                <SidenavToggle >☰</SidenavToggle>
                  
    
                  </ReactCSSTransitionGroup>
            </div>
        );
    }
}