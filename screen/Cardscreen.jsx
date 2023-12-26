import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { Image } from 'react-native'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faPlus}  from "@fortawesome/free-solid-svg-icons/faPlus"
import {faSnowflake}  from "@fortawesome/free-solid-svg-icons/faSnowflake"
import {faEllipsis}  from "@fortawesome/free-solid-svg-icons/faEllipsis"
import {faClipboard}  from "@fortawesome/free-solid-svg-icons/faClipboard"
const Cardscreen = () => {
  const [isShown , setShow] = useState(true)
  const toggleComponent =()=>{
    setShow(!isShown)
  }
  const [vissible , setVissible] = useState(true)
  const toggleComponentDisplay =()=>{
    setVissible(!vissible)
  }
    const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
  },[])
  return (
    <SafeAreaView>
      <Text style={{fontSize:30 , fontWeight:'bold' , marginLeft:15}}>Cards</Text>
     <View style={{marginTop:10}}>
     {isShown ? 
       <FrontCard/>
     :
    <BackCard/>
    }
     </View>
     <View style={{marginTop:20  }}>
       <View style={{flexDirection:'row', rowGap:50 , marginLeft:80  }}>
        <TouchableOpacity  >
       <View style={styles.container1} ><FontAwesomeIcon icon={faPlus} size={25} /></View>
       <Text style={{marginLeft:2 , marginTop:10 , color:'black' , fontWeight:'bold' }}>Add Money</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{marginLeft:20}} >
       <View style={styles.container1} ><FontAwesomeIcon icon={faSnowflake} size={25} /></View>
       <Text style={{marginLeft:2 , marginTop:10 , color:'black' , fontWeight:'bold' }}>Freeze Card</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={{marginLeft:20}} >
       <View style={styles.container1} ><FontAwesomeIcon icon={faEllipsis} size={25} /></View>
       <Text style={{marginLeft:10 , marginTop:10, color:'black' , fontWeight:'bold' }}>More</Text>
        </TouchableOpacity>
       </View>
        </View>
        <CardDetails/>
    
    </SafeAreaView>
  )
}
const FrontCard =()=>{
  const [isShown , setShow] = useState(true)
  const toggleComponent =()=>{
    setShow(!isShown)
  }
  return (
    <View>
        <TouchableOpacity style={styles.cardContainer} onPress={toggleComponent}>
       {/* Card Background */}
       <View style={styles.card}>
         <View style={{flexDirection:'row'}}>
           <Text style={{color:'white', fontWeight:'bold' , fontSize:16 , flex:7}}>FastPay</Text>
           <Text style={{color:'white', fontWeight:'bold' , fontSize:16 , flex:1}}>VISA</Text>
         </View>
         {/* Card Logo */}
         <Image
           source={require('../images/chip1.png')}
           style={styles.logo}
           resizeMode="contain"
         />
 
         {/* Card Number */}
         <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
 
         {/* Cardholder Name and Expiry */}
         <View style={styles.cardInfoContainer}>
           <Text style={styles.cardHolderName}> {'\u20A6'}50000.00</Text>
           <Text style={styles.expiry}>Exp: 12/28</Text>
         </View>
       </View>
     </TouchableOpacity>
    </View>
  )
}
const BackCard=()=>{
  return (
    <View>
      <TouchableOpacity style={styles.cardContainerBack} onPress={toggleComponent}>
      {/* Card Back */}
      <View style={styles.cardBack}>
        {/* Magnetic Stripe */}
        <View style={styles.magneticStripe}></View>

        {/* CVV */}
        <View style={styles.cvvContainer}>
          <Text style={styles.cvvLabel}>CVV</Text>
          <Text style={styles.cvvNumber}>123</Text>
        </View>
      </View>
    </TouchableOpacity>
    </View>
  )
}
const CardDetails=()=>{
  return (
    <View style={styles.curvedView}>
      <Text style={{fontWeight:'bold' , fontSize:18}}>Your Card Details</Text>
      <View>
        <Text style={{ fontSize:18 , color:'black'}}>Card Name</Text>
        <View style={{flexDirection:'row' , rowGap:20}}>
        <Text style={{fontWeight:'bold' , fontSize:18 , color:'black'}}>DOUGGIE</Text>
        <TouchableOpacity >
       <View style={styles.container1} ><FontAwesomeIcon icon={faClipboard} size={25} /></View>
        </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>Card Number</Text>
        <View style={{flexDirection:'row'}}>
        <Text>510040*******9822</Text>
        <TouchableOpacity >
       <View style={styles.container1} ><FontAwesomeIcon icon={faClipboard} size={25} /></View>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container3}>
        <Text>Show all</Text>
      </View>
    </View>
  )
}
const showall =()=>{
  return (
    <View style={styles.curvedView}>
    <Text>Your Card Details</Text>
    <View>
      <Text>Card Name</Text>
      <View style={{flexDirection:'row'}}>
      <Text>DOUGGIE</Text>
      <TouchableOpacity >
     <View style={styles.container1} ><FontAwesomeIcon icon={faPlus} size={25} /></View>
      </TouchableOpacity>
      </View>
    </View>
    <View>
      <Text style={{color:'grey' , fontSize:16 , fontWeight:80}}>Card Number</Text>
      <View style={{flexDirection:'row'}}>
      <Text>510040*******9822</Text>
      <TouchableOpacity >
     <View style={styles.container1} ><FontAwesomeIcon icon={faPlus} size={25} /></View>
      </TouchableOpacity>
      </View>
    </View>
    <View>
      <Text>CV</Text>
      <View style={{flexDirection:'row'}}>
      <Text>123</Text>
      <TouchableOpacity >
     <View style={styles.container1} ><FontAwesomeIcon icon={faPlus} size={25} /></View>
      </TouchableOpacity>
      </View>
    </View> 
    <View>
        <Text>Expiry Date</Text>
        <View style={{flexDirection:'row'}}>
        <Text>12/26</Text>
       
        </View>
      </View> 
  </View>
  )
}
export default Cardscreen

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
    marginLeft:5,
   
  
  },
  cardContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  card: {
    backgroundColor: 'black', // Card background color
    width: 380,
    height: 200,
    borderRadius: 15,
    padding: 20,
  },
  logo: {
    width: 60,
    height: 40,
    marginBottom: 10,
    marginTop:10,
  },
  cardNumber: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHolderName: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
  },
  expiry: {
    color: 'white',
    fontSize: 16,
  },
  cardContainerBack: {
    alignItems: 'center',
    marginTop: 50,
  },
  cardBack: {
    backgroundColor: 'white', // Card back background color
    width: 380,
    height: 200,
    borderRadius: 15,
    padding: 20,
  },
  magneticStripe: {
    backgroundColor: 'black', // Magnetic stripe color
    height: 20,
    marginBottom: 20,
  },
  cvvContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cvvLabel: {
    color: 'black',
    fontSize: 16,
  },
  cvvNumber: {
    color: 'black',
    fontSize: 16,
  },
  curvedView: {
    marginTop:10,
    width: 350,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 20, // Adjust this value for the desired curve
  },
})