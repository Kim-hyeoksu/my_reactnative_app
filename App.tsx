/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropsChild from './propsChild'
const App = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.subView}>
        <Text style={styles.mainText}>hello world</Text>
      </View>
      <View style={styles.subView}>
        <Text>hello world</Text>
      </View>
      <View style={styles.anotherView}>
        <Text style={styles.mainText}>hello world</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'green',
    height: '100%',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '50%'
  },
  anotherView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  }
})
export default App;
