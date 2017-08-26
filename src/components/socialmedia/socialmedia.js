import React, { Component } from 'react';
import {Icon,A} from './socialmedia.style'
import {Flex} from '../../theme/grid';

export default class SocialMedia extends Component {
    render() {
        return (
           
                <Flex justify={'center'} align={'flex-start'}>
                  <A href="https://github.com/vchrpng"> <Icon src={require('../../assets/github.png')} alt="github"/></A>
                  <A href="https://instagram.com/josphr"> <Icon src={require('../../assets/instagram.png')} alt="instagram"/></A>
                  <A href="https://line.me/vchrpng"> <Icon src={require('../../assets/line.png')} alt="line"/></A>
                  <A href="https://linkedin.com/in/vchrpng"> <Icon src={require('../../assets/linked-in.png')} alt="linked-in"/></A>
                  <A href="https://open.spotify.com/user/338r4wivp152hj69qq67r35qi"> <Icon src={require('../../assets/spotify.png')} alt="spotify"/></A>
                 </Flex> 
            
        );
    }
}