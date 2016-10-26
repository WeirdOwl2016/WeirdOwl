/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import language from './app/Language/language';
import color from './app/color/color';

export default class WeirdOwl extends Component { 
  render() {
    let my =  language('MY');
    let my1 =  color('COFFEE_COLOR_1');
    let img = '/logo.jpg';
    let img2 = './img'+img;
    const img3 = './img/logo.jpg';
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Image source={{uri:"./img/logo.jpg"}} style={{width:40,height:40}} />
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu:{my}:{my1}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WeirdOwl', () => WeirdOwl);
