import { FC, Dispatch, SetStateAction } from 'react'
import {Text, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

interface IPopUpModalOptions {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  showModal: boolean
  children: JSX.Element
  height?: string | number 
  bColor?: string
}

export const PopUpModal:FC<IPopUpModalOptions> = ({ setIsOpen, showModal, children, height, bColor }) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={showModal}
      >
       <View
        style={{
          flex: 1,
          backgroundColor: '#000000aa'
        }}>

          <View
            style={[style.container, {
              height: height || '60%',
              backgroundColor:  bColor || '#131313'
            }]}>
              <TouchableOpacity
                style={style.donebtn}
                onPress={() => {
                  setIsOpen(false)
                }}
                activeOpacity={0.8}>
                  <Icon
                    type='material-community'
                    name='arrow-left-circle'
                    color={bColor || '#000'}
                    size={20}
                  />
              </TouchableOpacity>
             {children}
          </View>
       </View>
    </Modal>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    borderTopEndRadius: 20,
    height: '70%',
    borderTopStartRadius: 20,
    padding: 15,
    position: 'absolute',
    bottom: 0
  },

  doneText: {
    fontSize: 14,
  },

  donebtn: {
    padding: 5,
    width: 55,
    alignItems: 'center',
    marginLeft: 'auto',
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#fff'
  },

  option: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5
  }
})
