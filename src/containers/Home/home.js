import React, { Component } from 'react';
import { MyName , Paragraph , Icon ,  SocialMedia , TextTransitionGroup } from './home.style';
import { Container , Flex } from '../../theme/grid';



export default class Home extends Component {
    render() {
        return (
            <Container>
                <Flex justify={'center'} align={'center'}>
                  <TextTransitionGroup>
                        <MyName>Watcharapong</MyName>
                            <Paragraph>
                            A CREATIVE FRONT-END DEVELOPER
                            <br/>
                            WHO LOVES TECHNOLOGY AND DESIGN
                            </Paragraph>
                    </TextTransitionGroup>
               </Flex>
               
               <SocialMedia>
                    <Icon src={require('../../assets/github.png')} alt="github"/>
                    <Icon src={require('../../assets/instagram.png')} alt="instagram"/>
                    <Icon src={require('../../assets/line.png')} alt="line"/>
                    <Icon src={require('../../assets/linked-in.png')} alt="linked-in"/>
                    <Icon src={require('../../assets/spotify.png')} alt="spotify"/>
                 </SocialMedia> 
                
            </Container>
        );
    }
}