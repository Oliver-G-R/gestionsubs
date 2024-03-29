import { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

interface IFAB{
  onPress?: () => void
  name: string
  type?: string
  color?: string
  size?:number
  bckColor?: string

}

export const Fab:FC<IFAB> = ({ bckColor, onPress, name, type = "font-awesome", color = '#fff', size = 30 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[style.fab, {backgroundColor: bckColor}]}>
      <Icon
          name={name}
          type={type}
          color={color}
          size={size}
          iconStyle={{
          }}
          
        />
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  fab: {
    width: 45,
    height: 45,
    position: 'absolute',
    zIndex: 3,
    top: 50,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#fff',
  }
})