import React, { Component } from 'react';
import { SidenavToggle , Sidebar , SidebarItem , Darker  } from './sidenav.style';
import TextAnimation from '../text-animation/text-animation'
import {Flex} from '../../theme/grid';


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
              
                <Sidebar active={this.state.active} >
                < TextAnimation/>
                <Flex justify={'center'} align={'center'}>
                        <SidebarItem>ABOUT</SidebarItem>
                        <SidebarItem>PROJECTS</SidebarItem>
                        <SidebarItem>CONTACT</SidebarItem>
                </Flex>
               
                </Sidebar>
            </div>
        );
    }
}