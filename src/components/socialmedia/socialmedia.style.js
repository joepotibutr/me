import styled from 'styled-components'



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