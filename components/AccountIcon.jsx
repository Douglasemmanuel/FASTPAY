import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane"
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns"
import {faPlus}  from "@fortawesome/free-solid-svg-icons/faPlus"
import { useNavigation } from '@react-navigation/native'
const AccountIcon = () => {
  const navigation = useNavigation()
    function move(){
      navigation.navigate('accountdetails')
    }
    function top(){
      navigation.navigate('topup')
    }
  return (
    
    <View style={styles.curvedView}>
        <TouchableOpacity  onPress={move} >
      <View style={styles.container1} ><FontAwesomeIcon icon={faBuildingColumns} size={30}  /></View>
      <Text style={{marginTop:5}}>Account Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:30}} onPress={top} >
      <View style={styles.container1}><FontAwesomeIcon icon={faPlus} size={30} /></View>
      <Text style={{marginTop:5}} >Top up</Text>
      </TouchableOpacity>
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
          width: 380,
          height: 90,
          backgroundColor: 'white',
          marginLeft:15,
          // marginTop:10,
          justifyContent:'center',
          alignItems:'center' ,
          flexDirection:'row' ,  
          // rowGap:10,
          borderRadius: 20, // Adjust this value for the desired curve
          borderTopRightRadius: 0,  // Set to 0 to remove right top border radius
          borderBottomRightRadius: 0,
          borderBottomLeftRadius:0,
          borderTopLeftRadius:0,
        },
})