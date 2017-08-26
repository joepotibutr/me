import React, { Component } from 'react';
import {Icon} from './socialmedia.style'
import {Flex} from '../../theme/grid';

export default class SocialMedia extends Component {
    render() {
        return (
           
                <Flex justify={'center'}>
                    <Icon src={require('../../assets/github.png')} alt="github"/>
                    <Icon src={require('../../assets/instagram.png')} alt="instagram"/>
                    <Icon src={require('../../assets/line.png')} alt="line"/>
                    <Icon src={require('../../assets/linked-in.png')} alt="linked-in"/>
                    <Icon src={require('../../assets/spotify.png')} alt="spotify"/>
                 </Flex> 
            
        );
    }
}