import { View, Text } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from "react"
import Icon from 'react-native-vector-icons/FontAwesome6';

type IconsProps = PropsWithChildren<{
  name: string
}>
// <FontAwesomeIcon icon={faCircle} />
// <FontAwesomeIcon icon={faXmark} />
const Icons = ({name}) => {
  switch (name) {
    case 'circle':
      return <Icon name='circle' size={38} color="#900" />
      break;
  
    case 'cross':
      return <Icon name='xmark' size={38} color="#900" />
      break;
  }
}

export default Icons