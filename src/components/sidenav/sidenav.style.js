import styled from 'styled-components';

export const SidenavToggle = styled.span`
    cursor:pointer;
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

export const SidenavBar = styled.div`
        height: 100%;
        width: ${props => props.active ? '200px':'300px'} ;
        position: fixed;
        z-index: 1;
        margin-left:100px;
        top: 0;
        left: 0;
        background-color: red;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        text-align:center;
       
`
