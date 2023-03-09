import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { globalStyle } from './constants/style';
import { CardSub } from './components/Card';

export default function App() {
  return (
    <View style={globalStyle.container}>
      <ScrollView 
        style={Style.containerCard}
        showsVerticalScrollIndicator={false}
      >
        <CardSub
          icon={{
            nameIcon: 'youtube',
            color: '#FF0000',
            nameService: 'Youtube'
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
        <CardSub
          icon={{
            nameIcon: 'microsoft-xbox',
            color: '#107C10',
            nameService: 'Xbox'
          }}
          subInfo={{
            id: "2",
            name: 'Xbox Live Gold',
            price: 11.99,
            membership: 'Mensual',
            description: 'Pago mensual compartido',
            firstPayment: new Date(),
            cycle: 'Mensual',
          }}
        />
        <CardSub
          icon={{
            nameIcon: 'sony-playstation',
            color: '#004DB5',
            nameService: 'Playstation'
          }}
          subInfo={{
            id: "3",
            name: 'Playstation Plus',
            price: 11.99,
            membership: 'Mensual',
            description: 'Pago mensual compartido',
            firstPayment: new Date(),
            cycle: 'Mensual',
          }}
        />
        <CardSub
          icon={{
            nameIcon: 'spotify',
            color: '#1DB954',
            nameService: 'Spotify'
          }}
          subInfo={{
            id: "3",
            name: 'Spotify Premium',
            price: 11.99,
            membership: 'Mensual',
            description: 'Pago mensual compartido',
            firstPayment: new Date(),
            cycle: 'Mensual',
          }}
        />
        
 
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}


const Style = StyleSheet.create({
  containerCard: {
  }
})