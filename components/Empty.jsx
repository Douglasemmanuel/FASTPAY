import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Empty = ({icon , message , centered=True}) => {
  return (
    <View
    style={{
        flex:1,
        justifyContent:centered ? 'center' :' flex-start',
        alignItems:'center',
        paddingVertical:120,
        
    }}
    >
        <FontAwesomeIcon
            icon={icon}
            size={100}
            color='#d0d0d0'
            style={{
                marginBottom:16
            }}
        />
      <Text
      style={{
        color:'#c3c3c3',
        fontSize:16
      }}
      >{message}</Text>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({})