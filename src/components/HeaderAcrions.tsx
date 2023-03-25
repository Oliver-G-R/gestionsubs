import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { Fab } from './FAB';
import { useState } from 'react';
import { ChooseSub } from './ChooseSub';


export const HeaderAcrions = () => {
  const [showModal, setShowModal ] = useState(false)
  
  return (
    <>
      <View style={Style.headerAction}> 
          <View>
            <TextInput
              placeholderTextColor={'#fff'}
              placeholder='Buscar alguna sub'
            />
          </View>
      </View>

      <ChooseSub
        showModal={showModal}
        setShowModal={setShowModal}
      />
     
      <Fab
        name='plus'
        bckColor='#1f1e1e'
        type='material-community'
        color='#ffff'
        onPress={() => setShowModal(prev => !prev)}
      />
    </>
  )
}

const Style = StyleSheet.create({
  headerAction:{
    marginTop: 40,
    width: '80%',
    backgroundColor: '#1f1e1e',
    padding: 15,
    borderRadius: 15,
  }

})