import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {stylePractice} from '../styles/styles'

type AppHeaderProp = {
    fullname:string
    message:string
}

const AppHeader = ({fullname,message}:AppHeaderProp): React.JSX.Element => {
  return (
    <View style={stylePractice.header}>
      <Text style={stylePractice.headerText}>{ `Input your fullname : ${fullname}`}</Text>
      <Text style={stylePractice.subtitleText}>{message}</Text>
    </View>
  )
}

export default AppHeader