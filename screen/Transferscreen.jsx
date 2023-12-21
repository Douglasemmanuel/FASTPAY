import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Beneficiaries from '../components/Beneficiaries'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane"
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns"
import {faPlus}  from "@fortawesome/free-solid-svg-icons/faPlus"
import {faChevronRight}  from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
const Transferscreen = () => {
  const navigation = useNavigation()
  function move(){
    // navigation.navigate('')
    console.log('hiii')
  }
  return (
    <SafeAreaView>
    <View>
      <Text>Transferscreen</Text>
      <Beneficiaries/>
      <View style={styles.curvedView}>
      <TouchableOpacity style={{flexDirection:'row' , marginLeft:15 , marginTop:5 }}>
       <View style={{flex:1}}>
       <View style={styles.container1}><FontAwesomeIcon icon={faPaperPlane} size={20} /></View>
       </View>
       <View style={{  flex:3}}>
       <Text style={{fontWeight:'bold' ,fontSize:15 , paddingTop:4}}>FastPay Account</Text>
        <Text style={{fontSize:12, color:'grey'}}>send to another Fastpay account</Text>
       </View>
        <View style={{ flex:1}}>
        <View style={styles.container2} ><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.curvedView}>
      <TouchableOpacity style={{flexDirection:'row' , marginLeft:15 , marginTop:5 }}>
       <View style={{flex:1}}>
       <View style={styles.container1}><FontAwesomeIcon icon={faBuildingColumns} size={20} /></View>
       </View>
       <View style={{  flex:3}}>
       <Text style={{fontWeight:'bold' ,fontSize:15 , paddingTop:4}}>Bank Account</Text>
        <Text style={{fontSize:12, color:'grey'}}>send to local Bank Account</Text>
       </View>
        <View style={{ flex:1}}>
        <View style={styles.container2} ><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
        </View>
      </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default Transferscreen

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
    padding: 11,
    borderRadius: 50,
    width: 45,
    height: 45,
    marginBottom:5,
   
  
  },
  curvedView: {
      width: 380,
      height: 100,
      backgroundColor: 'white',
      marginLeft:15,
      marginTop:10,
      justifyContent:'center',
      alignItems:'center' ,
      flexDirection:'row' ,  
      // rowGap:10,
      borderRadius: 20, // Adjust this value for the desired curve
      // borderTopRightRadius: 0,  // Set to 0 to remove right top border radius
      // borderBottomRightRadius: 0,
      // borderBottomLeftRadius:0,
      // borderTopLeftRadius:0,
    },
    container2: {
      marginTop:10,
      flex:1,
    },
})