import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane"
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons/faPhoneVolume"
import {faPlugCircleBolt} from "@fortawesome/free-solid-svg-icons/faPlugCircleBolt"
import {faPlaneUp} from "@fortawesome/free-solid-svg-icons/faPlaneUp"

const HomeIcons = () => {
    const navigation = useNavigation()
    function move(){
      navigation.navigate('other')
    }
    function transfer(){
      navigation.navigate('transfer')
    }
    function airtime(){
      navigation.navigate('airtime')
    }
    function electricity(){
      navigation.navigate('airtime')
    }
  return (
    <View style={{marginLeft:15 , marginTop:16}}>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontWeight:'bold' , fontSize:20 , flex:4}}>Quick Links</Text>
      <TouchableOpacity style={{ flex:1}} onPress={move}>
      <Text style={{fontWeight:70 , fontSize:20 , color:'grey' }}>See all</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.curvedView}>
        <TouchableOpacity  style={{flex:1}}  onPress={transfer}>
      <View style={styles.container1} ><FontAwesomeIcon icon={faPaperPlane} size={18}  /></View>
      <Text  style={styles.text}>BankTransfer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:1}} onPress={airtime}>
      <View style={styles.container1}><FontAwesomeIcon icon={faPhoneVolume} size={18} /></View>
      <Text style={styles.text} >Airtime</Text>
      </TouchableOpacity>
       <TouchableOpacity style={{flex:1}}>
      <View style={styles.container1}><FontAwesomeIcon icon={faPlaneUp} size={18} /></View>
      <Text style={styles.text} >Flight</Text>
      </TouchableOpacity>
       <TouchableOpacity style={{flex:1}} onPress={electricity}>
      <View style={styles.container1}><FontAwesomeIcon icon={faPlugCircleBolt} size={20} /></View>
      <Text style={styles.text} >Electricity</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default HomeIcons

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
    width: 50,
    height: 50,
  
  },
  text:{
    fontSize:12,
    marginTop:10,
    marginLeft:4,
    fontWeight:80
  },
  curvedView: {
    //   width: 350,
    //   height: 90,
    //   backgroundColor: 'white',
    //   marginLeft:20,
      marginTop:10,
      // justifyContent:'center',
      // alignItems:'center' ,
      flexDirection:'row' ,  
      rowGap:30,
    //   borderRadius: 20, // Adjust this value for the desired curve
    },
})