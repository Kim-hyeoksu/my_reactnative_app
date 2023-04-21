import React from 'react'
import {View, Text, StyleSheet, Alert, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

type Props = {
  name: string;
}
const Header = (props: Props) => (  //소괄호는 jsx를 리턴할 때 사용 
  <TouchableWithoutFeedback 
    // onPress={()=>Alert.alert('hello world!',)}
    // onLongPress={()=>Alert.alert('hello world!',)}
    // onPressIn={()=>Alert.alert('hello world!',)}
    onPressOut={()=>Alert.alert('hello world!',)}
  >
    <View style={styles.header}>
      <Text>{props.name}</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%'
  }
})
export default Header