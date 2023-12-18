import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye"
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons/faEyeSlash"
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane"
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns"
const AccountBalance = () => {
    const [vissible , setVissible] = useState(true)
    const toggleComponent =()=>{
      setVissible(!vissible)
    }
  return (
    <View style={styles.curvedView}>
    <View>
    <TouchableOpacity onPress={toggleComponent} style={{flexDirection:'row'  , alignItems:'center' , justifyContent:'center' , paddingTop:10}}>
      <Text style={{fontSize:15, textAlign:'center' , color:'grey' , fontWeight:90}}>Wallet Balance</Text>
      {/* style={{flex:1}} */}
     <View style={{marginLeft:5}}  >
     {vissible?<FontAwesomeIcon icon={faEye} /> :<FontAwesomeIcon icon={faEyeSlash} />}
     </View>
    </TouchableOpacity>
    </View>
    <View>
    {vissible ? <Hide/>:<Show/> }
    </View>
    </View>
  )
}
const Show =()=>{
    return (
        <View>
         <View style={{flexDirection:'row', alignItems:'center' , justifyContent:'center' }}>
         {/* <Text style={styles.container1}> {'\u20A6'} </Text> */}
         {/* flex:1 ,  */}
         <Text style={{fontWeight:'bold' , fontSize:20 , textAlign:'center' , marginTop:10 }}> <Text style={{fontSize:15}}> {'\u20A6'}</Text> 50000.00</Text>
         {/* <View style={{flex:1}}></View> */}
         </View>
         {/* <Text  style={{fontWeight:'bold' , fontSize:20}}>50000.00</Text> */}
          {/* <Text>Book balance <Text  style={{fontWeight:'bold' , fontSize:20}}>50000.00</Text></Text> */}
        </View>
    )
}
const Hide=()=>{
    return (
        <View>
         <View style={{flexDirection:'row', alignItems:'center' , justifyContent:'center'}}>
         <Text style={{fontWeight:'bold' ,  fontSize:30 , textAlign:'center'  , paddingBottom:100}}>...</Text>
         {/* <View style={{flex:1}}></View> */}
         </View>
         {/* <Text style={{fontWeight:'bold' , fontSize:20}}>...</Text> */}
          {/* <Text>Book balance <Text style={{fontWeight:'bold' , fontSize:20}}>...</Text></Text> */}
        </View>
      )
}

const Icon =()=>{
  return (
    <View style={{flexDirection:'row'}}>
      <View style={styles.container1}><FontAwesomeIcon icon={faBuildingColumns} /></View>
      <View style={styles.container1}><FontAwesomeIcon icon={faPaperPlane} /></View>
    </View>
  )
}
export default AccountBalance

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
    borderRadius: 8,
},
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
  padding: 7,
  borderRadius: 40,
  width: 10,
  height: 40,

},
curvedView: {
    width: 380,
    height: 90,
    backgroundColor: 'white',
    marginLeft:15,
    marginTop:10,
    borderRadius: 20, // Adjust this value for the desired curve
  },
})