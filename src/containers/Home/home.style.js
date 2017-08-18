import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export const TextTransitionGroup = styled(ReactCSSTransitionGroup).attrs({
    transitionName:'text',
    transitionAppear:true,
    transitionAppearTimeout:500,
    transitionEnterTimeout:false,
    transitionLeaveTimeout:false
})`
    .text-appear{
        opacity:0.1;
    }
    .text-appear.text-appear-active{
        opacity:1;
        transition:opacity .3s ease-in;
    }

`
export const SocialMedia = styled.div`
    display:flex;
    justify-content:center;
    
`
export const Icon = styled.img`
    margin:0 15px 0 15px;
    width:25px;
    height:25px;
    filter:brightness(300%);
    transition:transform .3s;
        &:hover{
            transform:scale(1.5,1.5);
        }
`



export const Paragraph = styled.p`
font-family: 'Gurajada', serif;
text-align:center;
color:white;
font-size:2em;
letter-spacing:2px;
`

export const MyName = styled.h1`
font-family: 'Lobster', cursive;
color:white;
letter-spacing:3px;
cursor:default;
font-size:5em;
transform:rotate(-5deg);
transition: transform .5s ease-in;
    &:hover{
        transform:rotate(0deg);
    }

`