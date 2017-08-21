import React, { Component } from 'react';
import {Content , List , Item, Text , Left , Right} from './text-animation.style'
import {Flex} from '../../theme/grid';

export default class TextAnimation extends Component {
    constructor(props){
        super(props);
        this.state = {
            left:'{',
            right:'}'
        }
    }

    render() {
        return (
         
                
                        <Flex justify={'center'} align={'flex-end'}>
                            <Content>
                            <Left>{this.state.left}</Left>
                                    <Text> Hello</Text>
                                    <List>
                                    <Item>World !</Item>
                                        <Item>Everybody !</Item>
                                    </List>
                                    <Right>{this.state.right}</Right>
                            </Content>
                        </Flex>
           
        );
    }
}