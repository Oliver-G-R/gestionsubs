import { FC, Dispatch, SetStateAction } from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

interface IPopUpModalOptions {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  showModal: boolean
  children: JSX.Element
}

export const PopUpModal:FC<IPopUpModalOptions> = ({ setIsOpen, showModal, children }) => {
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
            style={style.container}>
              <TouchableOpacity
                style={style.donebtn}
                onPress={() => setIsOpen(false)}
                activeOpacity={0.8}>
                <Icon
                  name="close"
                  type="material-community"
                  color="#ffff"
                  size={30}
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
    backgroundColor: '#131313',
    bottom: 0
  },

  doneText: {
    fontSize: 19,
    marginBottom: 10,
    color: '#000'
  },

  donebtn: {
    width: 30,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: '#1f1e1e'
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
