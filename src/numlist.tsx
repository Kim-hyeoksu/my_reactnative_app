import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

interface Props {
  num: number[]
}
const NumList = (props: Props) => {  
  return (
    props.num.map((item, idx)=>(
      <View style={styles.numList} key={idx}>
        <Text>{item}</Text>
      </View>
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