import React, { Component } from 'react';
import { SidenavToggle , Sidebar , SidebarItem , Darker , Underline } from './sidenav.style';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class SideNav extends Component {
    constructor(props){
        super(props);
        this.state = {  active : false  }
    }
   

    render() {
    
        return (
            <div>
                <Darker  onClick={() => this.setState({ active:!this.state.active })}  active={this.state.active} />
                <SidenavToggle  onClick={() => this.setState({ active:!this.state.active }) }>
                    
                    {this.state.active ? 'X':'☰'}
                  
                </SidenavToggle>
               
                <Sidebar active={this.state.active} justify={'center'} align={'center'}>
                
                        <SidebarItem href="www.google.com" >ABOUT<Underline/></SidebarItem>
                        <SidebarItem href="www.google.com" >PROJECTS<Underline/></SidebarItem>
                        <SidebarItem href="www.google.com" >CONTACT<Underline/></SidebarItem>
               
                </Sidebar>
               
            </div>
        );
    }
}