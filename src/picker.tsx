import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Picker} from '@react-native-picker/picker';

interface Props {
}
const PickerComponent = () => {  //소괄호는 jsx를 리턴할 때 사용 

  const [country, setCountry] = useState('canada')
  return (
    <View style={styles.container}>
      <Picker
      style={{
        height: 50,
        width: 250
      }}
      selectedValue={country}
      onValueChange={(val, idx)=>setCountry(val)}
      >
        <Picker.Item label='Korea' value='korea'/>
        <Picker.Item label='Canada' value='canada'/>
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center'
  }
})
export default PickerComponent