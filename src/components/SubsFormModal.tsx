import { useState, Dispatch, SetStateAction, useContext } from 'react';
import { ScrollView, StyleSheet, TextInput, View, Text, Platform, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

import { TouchableOpacity } from 'react-native';
import { PopUpModal } from './PopUpModal';

import { ISubModal } from '../models/Modal';
import { SubServiceAvailable, SubscriptionSatate } from '../models/Sub';

import { Picker } from '@react-native-picker/picker';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { SubContext } from '../context/SubContext';


interface SubsFormModalProps extends ISubModal {
  infoSubAvailable: SubServiceAvailable
  currentId?: number 
  setNestedModal?: Dispatch<SetStateAction<boolean>> 
}

export const SubsFormModal = ({showModal, infoSubAvailable, setShowModal, currentId, setNestedModal }:SubsFormModalProps) => {

  const [newSubscription, setNewSubscription] = useState<SubscriptionSatate>({
    name: infoSubAvailable.title,
    price: 0,
    membership: "Premium",
    description: "",
    paymentDay: new Date(),
    cycle: 'mensual',
  })

  const { add } = useContext(SubContext)

  const [showDatePicker, setShowDatePicker] = useState(false)


  const onChangeDateIos = (e:DateTimePickerEvent, selectedDate: Date | undefined) => {
    setNewSubscription({...newSubscription, paymentDay: new Date(selectedDate!)})
  }
  const onAndroidChange = (e: DateTimePickerEvent, selectedDate: Date | undefined) => {
    setShowDatePicker(false)
    if (selectedDate) {
      setNewSubscription({...newSubscription, paymentDay: new Date(selectedDate)})
    }
  }


  const handleInputChange = (name: string, value: any) => {
    setNewSubscription({
      ...newSubscription, 
      [name]:value,
    })
  }

  const handleChangePrice = (value: string) => {
     if (/^\d+$/.test(value) || value === ''){
        setNewSubscription({
              ...newSubscription,
              price: Number(value) 
            })
     }
  }

  const renderDatePicker = () => {
    return (
      <>
        <DateTimePicker
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          timeZoneOffsetInMinutes={0}
          value={newSubscription.paymentDay}
          mode='date'
          minimumDate={new Date()}
          onChange={Platform.OS === 'ios' ? onChangeDateIos : onAndroidChange}
        />
      </>
    )
  }

  const controlSub = () => {
    if(!currentId){
      //si va guardar
      if (newSubscription.name.trim() === '') {
        return Alert.alert('Veri', 'El nombre es obligatorio')
      }
      add({
        ...newSubscription,
        ...infoSubAvailable
      })
      setShowModal(false)
      setNestedModal && setNestedModal(false)
    }else{
      //si va actualizar

    }
  }

  return (
     <PopUpModal
        setIsOpen={setShowModal}
        showModal={showModal}
        height={currentId ? '90%' :  '88%'}
        bColor={infoSubAvailable.color}
      >
        <View style={styles.container}>

          <ScrollView
            showsVerticalScrollIndicator={false}
          > 
            <View style={styles.headerService}>
              <Icon
                type={infoSubAvailable.type}
                size={70}
                name={infoSubAvailable.nameIcon}
                color='#ffff'
              />
              <TextInput
                style={styles.priceInput}
                value={newSubscription.price!==0 ? newSubscription.price.toString() : ''}
                onChangeText={(text) => handleChangePrice(text)}
                keyboardType='numeric'
                maxLength={7}
                placeholderTextColor='#fff'
                placeholder='$00.00'
              />
            </View >
            <View style={styles.containerInput}>
              <View style={styles.contentInput}>
                <Text style={styles.textLabel}>
                  Nombre
                </Text>
                <TextInput
                  style={styles.textInput}
                  value={newSubscription.name}
                  onChangeText={text => handleInputChange("name", text)}
                  placeholderTextColor='#fff'
                  maxLength={20}
                  placeholder='Nombre'
                />
              </View>
              <View style={styles.contentInput}>
                <Text style={styles.textLabel}>
                  Descripcion
                </Text>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor='#fff'
                  onChangeText={text => handleInputChange("description", text)}
                  value={newSubscription.description}
                  placeholder='Crea una descripción'
                  maxLength={40}
                />
              </View >
              <View style={styles.contentInput}>
                <Text style={styles.textLabel}>
                  Membresia
                </Text>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor='#fff'
                  onChangeText={text => handleInputChange("membership", text)}
                  value={newSubscription.membership}
                  placeholder='Premium familiar..'
                  maxLength={40}
                />
              </View >
              <View style={styles.contentInput}>
                <Text style={styles.textLabel}>
                  Fecha de pago
                </Text>
                <Text style={styles.date} onPress={() => setShowDatePicker(true)}>
                    {
                      new Date(newSubscription.paymentDay).toLocaleDateString('es-ES')
                    }
                </Text>
                

                {Platform.OS !== 'ios' && showDatePicker && renderDatePicker()}
                
              </View >
              <View style={styles.contentInput}>
                <Text style={styles.textLabel}>
                  Ciclo de pago
                </Text>
                <Picker
                style={{
                  width:"50%",
                  color: '#ffff',
                }}
                  selectedValue={newSubscription.cycle}
                  onValueChange={(itemValue, itemIndex) =>
                    handleInputChange("cycle", itemValue)
                  }>
                  <Picker.Item label="Mensual" value="mensual" />
                  <Picker.Item label="Anual" value="anual" />
                </Picker>
                
              </View >
              <TouchableOpacity
                onPress={() => controlSub()}
                style={styles.btnSave}
                activeOpacity={0.8}>
                <Text 
                    style={[styles.btnTextSave, {color: infoSubAvailable.color}]}>
                    { currentId ? 'Actualizar' : 'Guardar'}
                </Text>
              </TouchableOpacity>
            </View >

  
          </ScrollView>
        </View>
      </PopUpModal>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  containerInput: {
    paddingHorizontal: 30,
    gap: 10
  },
  contentInput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    paddingBottom: 5,
    borderBottomColor: '#ffff'
  },
  textLabel:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10
  },
  textInput:{
    color: '#fff',
    width: '70%',
    textAlign: 'right',
    padding: 5,
    fontSize: 15
  },
  headerService:{
    alignItems: 'center',
  },
  priceInput:{
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center'
  },
  btnTextSave: {
    fontWeight: 'bold',
    fontSize: 18
  },
  btnSave: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 20
  },
  date:{
    color: '#fff', 
    fontSize: 15, 
    marginBottom: 10
  }
})