/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import PropsChild from './propsChild'
const App = () => {

  const [sampleText, setSampleText] = useState('Hello World')
  const [sampleBoolean, setSampleBoolean] = useState(true)
  const [sampleNum, setSampleNum] = useState(0)
  
  const inputText = () => {
    return sampleBoolean ? (
    <Text>sampleBoolean is true</Text>
    ) : (
    <Text>sampleBoolean is false</Text>
    )
  }

  const changeState = () => {
    if (!sampleBoolean) {
      setSampleText('Text Changed!')
      setSampleBoolean(true)
    } else {
      setSampleText('Hello World')
      setSampleBoolean(false)
    }
  }

  const onAdd = () => {
    setSampleNum(prevSampleNum => prevSampleNum + 1)
  }
  return (
    <View style={styles.background}>
      <PropsChild sampleText={sampleText} changeState={changeState}/>
    </View>
  )
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default App;
