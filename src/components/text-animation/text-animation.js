import React, { Component } from 'react';
import {Content , List , Item, Text} from './text-animation.style'
import {Flex} from '../../theme/grid';

export default class TextAnimation extends Component {
    render() {
        return (
            <Flex justify={'center'} align={'flex-end'}>
                 <Content>
                    <Text> Hello</Text>
                        <List>
                           <Item>World !</Item>
                            <Item>Everybody !</Item>
                        </List>
                </Content>
            </Flex>
        );
    }
}