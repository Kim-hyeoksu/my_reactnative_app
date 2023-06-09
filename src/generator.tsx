import React from 'react'
import {View, Text, StyleSheet, Alert, Button} from 'react-native'

interface Props {
  add: () => void;
}
const Generator = (props: Props) => (  
  <View style={styles.generator}>
    <Button
    title="Add Number"
    onPress={()=>props.add()}
    />
  </View>
)

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '100%'
  }
})
export default Generator