/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View
} from 'react-native';
import Card from "quicknews/app/card"

const styles = require('./styles');


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Card/>
            </View>
        );
    }
}