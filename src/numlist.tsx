import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

interface Props {
  num: number[],
  delete: (idx:number) => void
}
const NumList = (props: Props) => {  
  return (
    props.num.map((item, idx)=>(
      <TouchableOpacity 
        style={styles.numList} 
        key={idx}
        onPress={()=>props.delete(idx)}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    ))
  )
}

const styles = StyleSheet.create({
  numList: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5
  }
})
export default NumList