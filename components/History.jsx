import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import faWallet from 
import {faWallet} from "@fortawesome/free-solid-svg-icons/faWallet"
const History = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.curvedView}>
      <Text style={{color:'grey' , marginLeft:15 , marginTop:10 , fontSize:15 , fontWeight:'bold'}}>Recent Activities</Text>
      <View style={{flexDirection:'row' , marginLeft:15, marginTop:10 }}>
        <View><FontAwesomeIcon icon={faWallet} /></View>
        <Text style={{fontWeight:'bold' , fontSize:20 }}>Fast Pay</Text>
       <View style={{  marginLeft:10}}>
       <Text style={{fontWeight:'bold' ,fontSize:14}}>Just registered</Text>
        <Text style={{fontSize:12, color:'grey'}}>7 days ago</Text>
       </View>
        <View style={{borderRadius:50 ,backgroundColor:'black' , width:50 , height:20  , marginLeft:60 }}>
        <Text style={{color:'white' , paddingTop:3 , fontWeight:'bold', fontSize:12 , paddingLeft:5}}>{'\u20A6'}0.00</Text>
        </View>
      </View>
    </View>
  )
}

export default History

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
    curvedView: {
        width: 350,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 20, // Adjust this value for the desired curve
      },
    
    
})