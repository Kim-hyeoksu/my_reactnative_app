import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput, ActivityIndicator, ScrollView} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

interface Props {
}
const PickerComponent = () => {  //소괄호는 jsx를 리턴할 때 사용 

  const [country, setCountry] = useState('canada')
  const [value, setValue] = useState(50)

  const sliderValueChange = (value)=> {
    setValue(value)
  }
  return (
    <View style={styles.container}>
      <Slider 
      style={{height: 40, width: 300}}
      value={value}
      minimumValue={0}
      maximumValue={100}
      onValueChange={sliderValueChange}
      maximumTrackTintColor='red'
      minimumTrackTintColor='blue'
      step={1}
      />
      <Text style={styles.input}>{value}</Text>
      

      <Picker
      style={{marginTop: 20, height: 40, width: 250, backgroundColor:'green'}}
      selectedValue={country}
      onValueChange={(val, idx)=>setCountry(val)}
      >
        <Picker.Item label='Korea' value='korea'/>
        <Picker.Item label='Canada' value='canada'/>
      </Picker>
      <ActivityIndicator
      style={{paddingTop: 50}}
      size='large'
      color='green'
      animating={true}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center'
  },
  input: {
    fontSize: 25,
    height: 30
  }
})
export default PickerComponent