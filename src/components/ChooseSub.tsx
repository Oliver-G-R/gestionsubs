import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { PopUpModal } from './PopUpModal';
import { ISubModal } from '../models/Modal';
import { subscriptionsAvailable } from '../constants/infoSubs';
import { SubsFormModal } from './SubsFormModal';
import { SubServiceAvailable } from '../models/Sub';
import { Icon } from 'react-native-elements';
import { useSearchFilter } from '../hooks/useSearchFilter';

export const ChooseSub = ({setShowModal, showModal}:ISubModal) => {
  const [selectedSub, setSelectedSub] =  useState<SubServiceAvailable>()
  const [showAddSubModal, setShowAddSubModal] = useState(false)

  const [searchText, SetSearchText] = useState("")

  const [filterData] = useSearchFilter(subscriptionsAvailable, searchText, 'title')

  useEffect(() => {
      if(!showAddSubModal && !selectedSub) {
        setShowModal(false)
      }
  }, [showAddSubModal])

  return (
    <>
      <PopUpModal
        showModal={showModal}
        setIsOpen={setShowModal}
        height={'95%'}
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
            renderItem={({item}) => 
              <CardSubChoose 
                  setSelectedSub={setSelectedSub} 
                  setShowAddSubModal={setShowAddSubModal}
                  {...item} 
              />}
          />
        </>
      </PopUpModal>

      {showAddSubModal && <SubsFormModal
        showModal={showAddSubModal}
        setShowModal={setShowAddSubModal}
        setNestedModal={setShowModal}
        infoSubAvailable={selectedSub!}
      />}
    </>
  )
}


interface CardSubChooseProps extends SubServiceAvailable{
  setSelectedSub: Dispatch<SetStateAction<SubServiceAvailable | undefined>>
  setShowAddSubModal: Dispatch<SetStateAction<boolean>>
  
} 

const CardSubChoose = ({title, color, type, nameIcon, setSelectedSub, setShowAddSubModal}:CardSubChooseProps) => {
  
  const onPressSelected = () => {
    setSelectedSub({
      title,
      color,
      type,
      nameIcon
    })
    setShowAddSubModal(prev => !prev)
  }

  return (
    <TouchableOpacity 
      onPress={() => onPressSelected()}
      activeOpacity={0.7}
      style={[styleSubAvailable.container, {
        backgroundColor: '#1f1e1e'
    }]}>
      <View style={styleSubAvailable.logo}>
        <Icon
          type={type}
          size={30}
          name={nameIcon}
          color={color}
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