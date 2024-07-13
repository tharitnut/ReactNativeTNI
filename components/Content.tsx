import { StyleSheet, Text, View , Button ,Alert } from 'react-native'
import React from 'react'

type AppContentProp = {
    title:string
    name:string
}

const Content = ({title,name}:AppContentProp): React.JSX.Element => {

  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      <Button
        title="Click Me"
        onPress={()=> Alert.alert("Hello", name)}
        color="blue"
      />
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
    content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
    fontSize: 18,
    marginBottom: 20,
    },
    });