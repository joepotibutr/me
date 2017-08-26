import styled,{ css } from 'styled-components';


export const Flex = styled.div`
        display:flex;

        ${({ justify }) => justify && css `
            justify-content  : ${justify} ;

        `} 

        ${({ align }) => align && css `

            align-items : ${align} ;

        `}
`
export const Container = styled.div`
        padding-left: 120px;
        padding-right: 120px;
        height:100%;
        display:grid;
        grid-template-rows:80% 20%;
`

