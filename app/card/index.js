/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

const styles = require('./styles');

class Card extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.box}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>-</Text>
                        </View>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </View>
                    </View>
                    <Text style={styles.text}>Test text</Text>
                </View>
            </View>
        );
    }
}
module.exports = Card;