import { CardSub } from './Card';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { globalStyle } from '../constants/style';

export const ListCardSub = () => {
  return (
      <View style={Style.containerCard}>
        <ScrollView 
          style={Style.containerCard}
          showsVerticalScrollIndicator={false}
        >
          <CardSub
            icon={{
              nameIcon: 'youtube',
              color: '#FF0000',
              type:"font-awesome"
            }}
            subInfo={{
              id: "1",
              name: 'Youtube Premium',
              price: 11.99,
              membership: 'Mensual',
              description: 'Pago mensual compartido',
              firstPayment: new Date(),
              cycle: 'Mensual',
            }}
          />
        
    
        </ScrollView>
      </View>
  )
}

const Style = StyleSheet.create({
  containerCard: {
    marginTop: 10,
    height: '85%',
  }
})