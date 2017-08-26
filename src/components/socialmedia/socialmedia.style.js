import styled from 'styled-components'

export const A = styled.a`
    text-decoration:none;
    color:white;

`

export const Icon = styled.img`
padding:0 10px 0 10px;
width:15px;
height:15px;
cursor:pointer;
filter:brightness(-10%);
transition:transform .25s ease-in;
    &:hover{
        transform:scale(1.5,1.5);
    }
`