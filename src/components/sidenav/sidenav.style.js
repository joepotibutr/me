import styled from 'styled-components';


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

export const Sidebar = styled.div`
    height: ${props => props.active ? '50%':'0'} ;
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    background-color: #111;
    overflow: hidden;
    transition: 0.7s ease-in-out;
    text-align:center; 
    display:grid;
    grid-template-rows:50%;

`

export const SidebarItem = styled.a`
    font-family: 'Gurajada', serif;
    padding:0 60px 0 60px;
    font-size: 1.5em;
    color: white;
    transition: 0.3s ease-out;
    transition-duration: .5s;
    letter-spacing:1px;
    text-decoration:none;
        &:hover {
          
           color:#E9967A;
            
        }
       

`
export const Darker = styled.div`
    width:100%;
    height:100%;
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
 
`

