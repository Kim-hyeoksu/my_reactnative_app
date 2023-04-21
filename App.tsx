/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import Header from './src/header'
import Generator from './src/generator';
import NumList from './src/numlist'

const App = () => {
  const [appName, setAppName] = useState('My First App!!')
  const [random, setRandom] = useState([36, 999])

  const onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100) + 1
    setRandom((prevRandom) => [...prevRandom, randomNum])
  }

  const onNumDelete = (position: number) => {
    const newArray = random.filter((num, index)=>{
      return position != index
    })
    setRandom(newArray)
  }

  return (
    <View style={styles.mainView}>
      <Header name={appName}/>
      <View>
        <Text
        style={styles.mainText}
        onPress={()=>Alert.alert('text touch event')}
        >Hello World
        </Text>
      </View>
      <Generator add={onAddRandomNum}/>
      <ScrollView
      style={{
        width: '100%'
      }}
      //onMomentumScrollBegin={}
      //onMomentumScrollEnd={}
      //onScroll={}
      //onContentSizeChange={(width, height)=>}
      //bounces={true}
      >
        <NumList num={random} delete={onNumDelete}/>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
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
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20
  }
})
export default App;
