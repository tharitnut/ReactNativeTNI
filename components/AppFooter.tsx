import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {stylePractice} from '../styles/styles'

type AppFooterProp = {
  footerMessage:string
}

const AppFooter = ({footerMessage}:AppFooterProp): React.JSX.Element => {
  return (
    <View style={stylePractice.footer}>
      <Text style={stylePractice.footerText}>{footerMessage}</Text>
    </View>
  )
}

export default AppFooter