import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane"
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns"
const AccountIcon = () => {
  return (
    <View style={styles.curvedView}>
      <View style={styles.container1}><FontAwesomeIcon icon={faBuildingColumns} size={30}  /></View>
      <View style={styles.container1}><FontAwesomeIcon icon={faPaperPlane} size={30} /></View>
    </View>
  )
}

export default AccountIcon

const styles = StyleSheet.create({
    container1: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 15,
        borderRadius: 50,
        width: 60,
        height: 60,
      
      },
      curvedView: {
        //   width: 350,
        //   height: 90,
        //   backgroundColor: 'white',
        //   marginLeft:20,
          marginTop:10,
          justifyContent:'center',
          alignItems:'center' ,
          flexDirection:'row' ,  
          rowGap:10,
        //   borderRadius: 20, // Adjust this value for the desired curve
        },
})