import { StyleSheet, TextInput, View } from 'react-native';
import { Fab } from './FAB';


export const HeaderAcrions = () => {
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
      <Fab
        name='plus'
        bckColor='#1f1e1e'
        color='#ffff'
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
    borderRadius: 20,
  }

})