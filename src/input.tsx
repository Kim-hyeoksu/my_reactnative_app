import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

interface Props {
}
const Input = () => {  //소괄호는 jsx를 리턴할 때 사용 
  const [myTextInput, setMyTextInput] = useState<string>('')

  const onChangeInput = (event) => {
    setMyTextInput(event)
  }


  return (
    <View style={styles.mainView}>
      <TextInput
      value={myTextInput}
      style={styles.input}
      onChangeText={onChangeInput}
      multiline={true}  //개행
      maxLength={100}
      autoCapitalize='none' //대문자 자동 수정 안함 
      editable={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%'
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10
  }
})
export default Input