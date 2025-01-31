import {SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import Icons from './components/Icons'
const App = () => {
  return (
    <SafeAreaView>
      <Text>App Hello 1</Text>
      <Icons name={'pencil'}/>
    </SafeAreaView>
  )
}

export default App