import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useState, useContext } from 'react';
import { SubContext } from '../context/SubContext';
import { Icon } from 'react-native-elements';
import { useAsyncStorage } from '../hooks/useAsyncStorage';

export const Footer = () => {
  const [perCycle, setPerCycle] = useState<'anual' | 'mensual'>('anual')
  const [showAlert, setShowAlert] = useAsyncStorage<boolean>({key: 'showAlert', initialValue: true})

  const { totalCost } = useContext(SubContext)
  var total = totalCost(perCycle)

  const renderAlert = () => (
    <TouchableOpacity 
              activeOpacity={0.8}
              onPress={() => setShowAlert(false)}
              style={Style.containerAlert}>
              <Icon
                name='info'
                style={Style.btnInfo}
                type='feather'
                color='#fff'
                size={30}
              />
            <View>
              <Text style={Style.alertTitle}>
                Los gatos moderados son los que te permiten vivir una vida feliz y saludable.
              </Text>
              <Text style={Style.textAlert}>
                Los gastos excesivos mensuales mayores a $1000 pesos, se mostrarán en rojo al igual 
                que los gastos anuales mayores a $10000 pesos.
              </Text>
            </View>
          </TouchableOpacity>
  )

  if(perCycle === 'mensual' && total > 1000 && showAlert) return renderAlert()
  if(perCycle === 'anual' && total > 10000 && showAlert) return renderAlert()

  return (
    <>
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
        <Text style={[Style.price, {
          color: perCycle === 'mensual' && total > 1000 ? '#E45454' : '#fff'
             ? perCycle === 'anual' && total > 10000 ? '#E45454' : '#fff' : '#fff'
  
        }]}>
          $ {total}
        </Text>
      </TouchableOpacity>
    </>
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
  containerAlert: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E45454',
    position: 'relative',
  },
  btnInfo: {
    marginBottom: 10,
  },
  alertTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textAlert: {
    color: '#fff',
    fontSize: 15,
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
  },

})