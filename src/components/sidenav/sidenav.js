import React, { Component } from 'react';
import { SidenavToggle , SidenavBar } from './sidenav.style';


export default class SideNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : false
        }
    }
   

    render() {
    
        return (
            <div>
              
                <SidenavToggle  onClick={() => this.setState({ active:!this.state.active }) }>☰</SidenavToggle>
                  
                <SidenavBar active={this.state.active}/>
                 
            </div>
        );
    }
}