import React from 'react'
import { Text, View } from 'react-native'

const propsChild = (props) => {
  return (
    <View>
      <Text onPress={props.changeState}>
        {props.sampleText}
      </Text>
    </View>
  )
}

export default propsChild