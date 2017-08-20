import styled from 'styled-components';

export const SidenavToggle = styled.span`
    cursor:pointer;
    z-index:2;
    position:absolute;
    color:white;
    top:50px;
    left:50px;
    font-size:2em;
    transform:scale(1.5,1);
    transition: transform .5s ease-in;
        &:hover {
            transform:rotate(180deg)scale(1.5,1);
        }
`

export const Sidebar = styled.div`
        height: ${props => props.active ? '50%':'0'} ;
        width: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        text-align:center;   
`

export const SidebarItem = styled.a`
        padding:25px;
        font-size: 25px;
        color: #818181;
        transition: 0.3s;
        text-decoration:none;
            &:hover{
                color: #f1f1f1;
            }

`

