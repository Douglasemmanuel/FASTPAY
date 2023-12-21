import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import {faPlus}  from "@fortawesome/free-solid-svg-icons/faPlus"
import {faChevronRight}  from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { Image } from 'react-native'
const Beneficiaries = () => {
    const navigation = useNavigation()
    function move(){
        navigation.navigate('beneficiaries')
        console.log('hiii')
    }
  return (
    <View style={{marginLeft:15 , marginTop:20}}>
      {/* <Text>Beneficiaries</Text> */}
      <View style={{flexDirection:'row'}}>
        <View style={{}}>
        <Text style={{fontWeight:'bold' , fontSize:16,  }}> Frequent Beneficiaries</Text>
        </View>
        <TouchableOpacity style={{marginLeft:120 }} onPress={move} >
        <Text style={{fontWeight:'bold' , fontSize:16 , color:'grey' }}>View All</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop:3  }} onPress={move}> 
            <FontAwesomeIcon icon={faChevronRight} size={15} />
         </TouchableOpacity>
        </View>
        <View style={{marginTop:20}}>
       <View style={{flexDirection:'row' }}>
        <TouchableOpacity >
       <View style={styles.container1} ><FontAwesomeIcon icon={faPlus} size={25} /></View>
       <Text style={{marginLeft:5 , marginTop:1 , color:'grey' }}>Add</Text>
       <Text style={{paddingLeft: 5  , color:'grey'}}>Beneficiary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:10}}>
       {/* <View style={styles.container1} ><FontAwesomeIcon icon={faPlus} size={25} /></View> */}
       <View>
       <Image style={{ borderRadius: 50,width:50 , height:50}} source={require('../images/mansmile.jpg')}/>
       </View>
       <Text style={{marginLeft:5 , marginTop:1 , color:'grey' }}>Doggie</Text>
       <Text style={{paddingLeft: 5  , color:'grey'}}>Emma</Text>
        </TouchableOpacity>
       </View>
        </View>
    </View>
  )
}

export default Beneficiaries

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
        padding: 12,
        borderRadius: 50,
        width: 50,
        height: 50,
       
      
      },
})