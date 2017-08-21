import styled from 'styled-components';

export const SocialMedia = styled.div`
    display:flex;
    justify-content:center;
    
`
export const Icon = styled.img`
    padding:0 20px 0 20px;
    filter:invert(100%);
    width:20px;
    height:20px;
    cursor:pointer;
    
    transition:transform .25s ease-in;
        &:hover{
            transform:scale(1.5,1.5);
        }
`


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
    font-size:7em;
    transform:rotate(-5deg);
    transition: transform .5s ease-in;
        &:hover{
            transform:rotate(0deg) scale(1.1,1.1);
        }

`
