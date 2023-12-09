import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
const AccountBalance = () => {
    const [vissible , setVissible] = useState(true)
  return (
    <View>
    {vissible ? <Show/> : <Hide/> }
    </View>
  )
}
const Show =()=>{
    return (
        <View>
         <View style={{flexDirection:'row'}}>
         <Text style={{fontWeight:'bold' , flex:1}}>{'\u20A6'} 50000.00</Text>
         <View style={{flex:1}}></View>
         </View>
    
          <Text>Book balance <Text>50000.00</Text></Text>
        </View>
    )
}
const Hide=()=>{
    return (
        <View>
         <View style={{flexDirection:'row'}}>
         <Text style={{fontWeight:'bold' , flex:1}}>000</Text>
         <View style={{flex:1}}></View>
         </View>
    
          <Text>Book balance <Text>...</Text></Text>
        </View>
      )
}
export default AccountBalance

const styles = StyleSheet.create({})