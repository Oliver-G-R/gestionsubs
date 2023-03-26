import { StyleSheet, TextInput, View } from 'react-native';
import { Fab } from './FAB';
import { useState, Dispatch, SetStateAction } from 'react';
import { ChooseSub } from './ChooseSub';

interface HeaderAcrionsProps {
  setSearch: Dispatch<SetStateAction<string>>
  search: string
}
export const HeaderAcrions = ({search, setSearch}:HeaderAcrionsProps) => {
  const [showModal, setShowModal ] = useState(false)
  return (
    <>
      <View style={Style.headerAction}> 
          <View>
            <TextInput
              placeholderTextColor={'#fff'}
              onChangeText={setSearch}
              value={search}
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
    marginTop: 30,
    width: '80%',
    backgroundColor: '#1f1e1e',
    padding: 10,
    borderRadius: 15,
  }

})