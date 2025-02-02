import { View, Text } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from "react"
import Icon from 'react-native-vector-icons/FontAwesome6';

type IconsProps = PropsWithChildren<{
  name: string
}>

const Icons = ({name}:IconsProps) => {
  switch (name) {
    case 'circle':
      return <Icon name='circle' size={48} color="#F7CD2E" />
      break;
  
    case 'cross':
      return <Icon name='xmark' size={48} color="#38CC77" />
      break;

    default:
      return       
  }
}

export default Icons