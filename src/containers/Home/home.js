import React, { Component } from 'react';
import { MyName , Paragraph  } from './home.style';
import { Container , Flex } from '../../theme/grid';
import SocialMedia from '../../components/socialmedia/socialmedia'



export default class Home extends Component {
    render() {
        return (
            
            <Container>
                <Flex justify={'center'} align={'center'}>
                  <div>
                        <MyName>Watcharapong</MyName>
                            <Paragraph>
                            A CREATIVE FRONT-END DEVELOPER
                            <br/>
                            WHO LOVES TECHNOLOGY AND DESIGN
                            </Paragraph>
                    </div>
               </Flex>
               
               
                <SocialMedia/>
            </Container>
           
        );
    }
}