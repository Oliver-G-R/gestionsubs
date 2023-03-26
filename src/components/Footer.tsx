import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import { SubContext } from '../context/SubContext';

export const Footer = () => {
  const [perCycle, setPerCycle] = useState<'anual' | 'mensual'>('anual')
  const { totalCost } = useContext(SubContext)
  return (
    <TouchableOpacity
      style={Style.container}
      activeOpacity={0.99}
      onPress={() => setPerCycle(prev => prev === 'anual' ? 'mensual' : 'anual')}
      >
      <View>
        <Text style={Style.text}>
          Todos los gastos
        </Text>
        <Text style={Style.textTime}>
          Al {perCycle === 'anual' ? 'año' : 'mes'} 
        </Text>
      </View>
      <Text style={Style.price}>
        $ {totalCost(perCycle)}
      </Text>
    </TouchableOpacity>
  )
}


const Style = StyleSheet.create({
  container:{
    backgroundColor: '#1f1e1e',
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