import React, { Component } from 'react';
import { SidenavToggle , Sidebar , SidebarItem , Darker  } from './sidenav.style';
import TextAnimation from '../text-animation/text-animation'
import {Flex} from '../../theme/grid';
import {Link} from 'react-router-dom'


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
                        <SidebarItem><Link to="/about">ABOUT</Link></SidebarItem>
                        <SidebarItem><Link to="/projects">PROJECTS</Link></SidebarItem>
                        <SidebarItem><Link to="/about">CONTACT</Link></SidebarItem>
                </Flex>
               
                </Sidebar>
            </div>
        );
    }
}