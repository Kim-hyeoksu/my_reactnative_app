/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView, Button, TextInput, Image} from 'react-native';
import Header from './src/header'
import Generator from './src/generator';
import NumList from './src/numlist'
import Input from './src/input';
import PickerComponent from './src/picker';
import hyeoxu from './assets/images/hyeoxuundersakura.jpg'

const App = () => {
  const [appName, setAppName] = useState('My First App!!')
  const [random, setRandom] = useState([36, 999])
  const [myTextInput, setMyTextInput] = useState<string>('')
  const [alphabet, setAlphabet] = useState(['a', 'b', 'c', 'd'])

  const onChangeInput = (event) => {
    setMyTextInput(event)
  }

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

  const onAddTextInput = () => {
    setMyTextInput('')
    setAlphabet((prevState)=>[...prevState, myTextInput])
  }

  return (
    <View style={styles.mainView}>
      <Image
      style={styles.image}
      //source={{uri: ''}}
      source={hyeoxu}
      onLoadEnd={()=>Alert.alert('image loaded')}
      />
      <PickerComponent/>
      <TextInput
      value={myTextInput}
      style={styles.input}
      onChangeText={onChangeInput}
      multiline={true}  //개행
      maxLength={100}
      autoCapitalize='none' //대문자 자동 수정 안함 
      editable={true}
      />
      <Button
        title="Add Text Input"
        onPress={onAddTextInput}
      />
      <ScrollView style={{width: '100%'}}>
        {
          alphabet.map((item, idx) => (
            <Text
            style={styles.mainText}
            key={idx}
            >
              {item}
            </Text>
          ))
        }
      </ScrollView>
      {/* <Header name={appName}/>
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
      </ScrollView> */}
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
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'contain'
  }
})
export default App;
