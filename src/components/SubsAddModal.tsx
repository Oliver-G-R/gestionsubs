import { Dispatch, useState, SetStateAction } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { PopUpModal } from './PopUpModal';
import DateTimePicker from '@react-native-community/datetimepicker'
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { ISubModal } from '../models/Modal';

export const SubsAddModal = ({setShowModal, showModal}:ISubModal) => {

  return (
     <PopUpModal
        setIsOpen={setShowModal}
        showModal={showModal}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <TextInput
            placeholder='Nombre'
          />
          <TextInput
            placeholder='Descripcion'
            multiline
          />
          <TouchableOpacity activeOpacity={0.8}>
            <Text>

            </Text>
          </TouchableOpacity>

        </ScrollView>
      </PopUpModal>
  )
}
