import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const BackgroundAnimation = styled(ReactCSSTransitionGroup).attrs({

    transitionName:'background',
    transitionAppear:true,
    transitionAppearTimeout:500,

})`
    .background-appear {
      opacity:0;
    }
    .background-appear-active {
      opacity:1;
       transition:opacity .5s;
    }
`

export const Background = styled.div`
  background-image:url(${require('./assets/background.jpg')});
  max-width:100%;
  height:100vh;
  background-position:center;
  overflow:hidden;
`
