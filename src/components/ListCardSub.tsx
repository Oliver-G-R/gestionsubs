import { CardSub } from './Card';
import { FlatList, ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import { useContext } from 'react';
import { SubContext } from '../context/SubContext';
import { useSearchFilter } from '../hooks/useSearchFilter';

interface ListCardSubProps {
  search: string
}
export const ListCardSub = ({search}: ListCardSubProps) => {
  const { fullSubscription } = useContext(SubContext)
  const [ filterData ] = useSearchFilter(fullSubscription, search, 'name')

  return (
      <View style={Style.containerCard}>
        {fullSubscription.length > 0 ? <FlatList
          style={Style.containerCard}
          showsVerticalScrollIndicator={false}
          data={filterData}
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
                paymentDay: item.paymentDay,
                cycle: item.cycle,
              }}
            />
          )}

        /> : <EmptyList/>}

      </View>
  )
}

const EmptyList = () => (
  <View style={styleEmptyList.container}>
    <Image
      source={require('../../assets/emptysvg.png')}
      style={{
        width: 350,
        height: 350,
      }}
    />

    <Text style={styleEmptyList.text}>
      No hay suscripciones
    </Text>
  </View>
)

const styleEmptyList = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  }

})
const Style = StyleSheet.create({
  containerCard: {
    marginTop: 10,
    height: '85%',
  },

})