import { CardSub } from './Card';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { SubContext } from '../context/SubContext';

export const ListCardSub = () => {
  const { fullSubscription } = useContext(SubContext)
  return (
      <View style={Style.containerCard}>
        <FlatList
          style={Style.containerCard}
          showsVerticalScrollIndicator={false}
          data={fullSubscription}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <CardSub
              icon={{
                nameIcon: item.nameIcon,
                color: item.color,
                type: item.type
              }}
              subInfo={{
                id: item.id,
                name: item.name,
                price: item.price,
                membership: item.membership,
                description: item.description,
                firstPayment: item.firstPayment,
                cycle: item.cycle,
              }}
            />
          )}
          
        />
    
      </View>
  )
}

const Style = StyleSheet.create({
  containerCard: {
    marginTop: 10,
    height: '85%',
  }
})