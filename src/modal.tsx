import React, { useState } from 'react'
import {View, Text, Button, Modal, Alert} from 'react-native'
const ModalComponent = () => {

  const [modal, setModal] = useState(false)
  const handleModal = () => {
    setModal(modal? false : true)
  }
  return (
    <View style={{width: '100%'}}>
      <Button
      title='Open Modal'
      onPress={handleModal}
      />

      <Modal
      visible={modal}
      animationType='slide' //fade none 
      onShow={()=>Alert.alert('warning')}
      >
        <View style={{marginTop: 60, backgroundColor: 'red'}}>
          <Text>This is modal content</Text>
        </View>
        <Button
        title='Go Back'
        onPress={handleModal}
        />
      </Modal>
    </View>
  )
}

export default ModalComponent