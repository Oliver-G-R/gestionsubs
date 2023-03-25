import { FlatList, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { PopUpModal } from './PopUpModal';
import { ISubModal } from '../models/Modal';
import { subscriptionsAvailable } from '../constants/infoSubs';
import { SubsAddModal } from './SubsAddModal';
import { SubServiceAvailable } from '../models/Sub';
import { Icon } from 'react-native-elements';
import { useEffect, useState } from 'react';
import { useSearchFilter } from '../hooks/useSearchFilter';

export const ChooseSub = ({setShowModal, showModal}:ISubModal) => {
  const [subAvailable, setSubAvailable] = useState(subscriptionsAvailable)
  const [searchText, SetSearchText] = useState("")
  const [filterData] = useSearchFilter(subAvailable, searchText, 'title')

  return (
    <>
      <PopUpModal
        setIsOpen={setShowModal}
        showModal={showModal}
      > 
        <>
          <View style={styleChooseSub.boxSearch}>
            <Icon
              type='material-community'
              size={28}
              name='magnify'
              style={styleChooseSub.iconSearch}
              color='#fff'
            />
            <TextInput
              style={styleChooseSub.textInput}
              placeholder='Buscar...'
              placeholderTextColor='#fff'
              value={searchText}
              onChangeText={text => SetSearchText(text)}
            />
          </View>
          <FlatList
            data={filterData}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.nameIcon}
            renderItem={({item}) => <CardSubChoose {...item} />}
          />
        </>
      </PopUpModal>

      {/* <SubsAddModal

      /> */}
    </>
  )
}



const CardSubChoose = ({title, color, type, nameIcon}:SubServiceAvailable) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      style={[styleSubAvailable.container, {
        backgroundColor: color
    }]}>
      <View style={styleSubAvailable.logo}>
        <Icon
          type={type}
          size={30}
          name={nameIcon}
          color='#fff'
        />
        <Text style={styleSubAvailable.title}>{title}</Text>
      </View>
      <Icon
        type='material-community'
        size={30}
        name='plus'
        color='#fff'
      />
    </TouchableOpacity>
  )
}

const styleChooseSub = StyleSheet.create({
  boxSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1e1e',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 15
  },
  textInput: {
    padding: 7,
    color: '#fff',
    fontSize: 18,
    width: '93%'
  },
  iconSearch:{

  }
})

const styleSubAvailable = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    flexDirection: 'row',

  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '500'
  }
})