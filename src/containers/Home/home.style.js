import styled from 'styled-components';




export const Paragraph = styled.p`
    font-family: 'Gurajada', serif;
    text-align:center;
    color:#E5E7E9;
    font-size:1.5em;
    word-spacing:8px;
    letter-spacing:2px;
    font-weight:bold;
    line-height:25px;
`

export const MyName = styled.h1`
    font-family: 'Lobster', cursive;
    font-weight:100;
    color:#E5E7E9;
    letter-spacing:3px;
    cursor:default;
    font-size:5em;
    transform:rotate(-5deg);
    transition: transform .5s ease-in;
        &:hover{
            transform:rotate(0deg) scale(1.1,1.1);
        }

`
