import React, { Component } from 'react';
import {MyName,Paragraph,TextTransitionGroup} from './home.style';


export default class Home extends Component {
    render() {
        return (
            <div>
               <TextTransitionGroup>
                <MyName>Watcharapong</MyName>
                <Paragraph>A CREATIVE FRONT END DEVELOPER</Paragraph>
               </TextTransitionGroup>
            </div>
        );
    }
}