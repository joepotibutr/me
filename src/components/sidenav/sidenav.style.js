import styled from 'styled-components';
import {Flex} from '../../theme/grid';

export const SidenavToggle = styled.span`
    cursor:pointer;
    z-index:4;
    position:absolute;
    color:white;
    top:50px;
    left:50px;
    font-size:2em;
    transform:scale(1.5,1);
`

export const Sidebar = styled(Flex)`
    height: ${props => props.active ? '50%':'0'} ;
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    background-color: #111;
    overflow: hidden;
    transition: 0.5s ease-out;
    text-align:center;   
`

export const SidebarItem = styled.a`
    font-family: 'Gurajada', serif;
    padding:75px;
    font-size: 2.5em;
    color: white;
    transition: 0.3s;
    text-decoration:none;
        &:hover {
            color: #f1f1f1;
        }
       

`
export const Darker = styled.div`
    width:100%;
    height:100vh;
    background-color:black;
    opacity: ${props => props.active ? '0.5':'0'};
    visibility: ${props => props.active ? 'visible':'hidden'};
    z-index:2;
    position:absolute;
    transition:1s;
    overflow:hidden;
`

export const Underline = styled.div`
    width:100%; 
    height:2px; 
    background: #F2F3F4;
    transition: .3s;
    
`

