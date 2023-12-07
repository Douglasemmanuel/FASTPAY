import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tittle = ({text , color}) => {
  return (
      <Text style={{
        color:{color},
        textAlign:'center',
        fontSize:48,
        // fontFamily:'LeckerliOne-Regular',
        marginBottom:30,
      }}
      >
        {text}
      </Text>
  )
}

export default Tittle

const styles = StyleSheet.create({})