import React, { Component } from 'react';
import { SidenavToggle , Sidebar , SidebarItem } from './sidenav.style';
import { Flex } from '../../theme/grid';


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
                <Flex justify={'center'} align={'center'}>
                    <Sidebar active={this.state.active}>
                        <SidebarItem href="www.google.com" >About</SidebarItem>
                        <SidebarItem href="www.google.com" >Projects</SidebarItem>
                        <SidebarItem href="www.google.com" >Contact</SidebarItem>
                    </Sidebar>
                 </Flex>
            </div>
        );
    }
}