import styled , {keyframes} from 'styled-components'


const change = keyframes`
        30%,70% {
            transform:translateY(-50%);
        }
`

export const Content = styled.div`
    font-weight: 600;
    overflow: hidden;
    height:80px;
    padding-left:40px;
    font-size:4em;
`
const Bracket = styled.span`
    color:#5DADE2;
    position:absolute;
    font-size:1.5em;

`
export const Left = styled(Bracket)`
   left:29%;
   top:23%;     
`
export const Right = styled(Bracket)`
    right:27%;
    top:23%;     
`

export const List = styled.ul`
    margin-top:0;
    text-align:left;
    list-style:none;
    padding-left:180px;
    animation-name:${change};
    animation-duration:5s;
    animation-iteration-count: infinite;
`
export const Item = styled.li`
    color:white;
    margin:0;
`

export const Text = styled.p`
    color:white;
    display:inline;
    float:left;
    margin:0;
`

