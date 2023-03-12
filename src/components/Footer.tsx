import { StyleSheet, View, Text } from 'react-native';

export const Footer = () => {
  return (
    <View style={Style.container}>
      <View>
        <Text style={Style.text}>
          Todos los gastos
        </Text>
        <Text style={Style.textTime}>
          Al mes 
        </Text>
      </View>
      <Text style={Style.price}>
        $ 293.20
      </Text>
    </View>
  )
}


const Style = StyleSheet.create({
  container:{
    backgroundColor: '#1f1e1e',
    height: 100,
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text:{
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,

  },
  price: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 22,
  },
  textTime:{
    color: '#fff',
  }



})