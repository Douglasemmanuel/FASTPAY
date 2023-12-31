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
import { ScrollView } from 'react-native'
import CardTransaction from '../components/CardTransaction'
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
    <ScrollView vertical  alwaysBounceVertical   showsVerticalScrollIndicator={false}>
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
        <CardTransaction/>
    </ScrollView>
    
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
        <View style={styles.cardContainer} onPress={toggleComponent}>
       {/* Card Background */}
       <View style={styles.card}>
         <View style={{flexDirection:'row' ,  marginTop:10}}>
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
         {/* <Text style={styles.cardNumber}>1234 5678 9012 3456</Text> */}
 
         {/* Cardholder Name and Expiry */}
         <View style={styles.cardInfoContainer}>
           <View>
           <Text style={styles.cardHolderName}> {'\u20A6'}50000.00</Text>
           <Text style={{fontSize:16 , color:'grey' , marginTop:2}}>Wallet Balance</Text>
           </View>
           {/* <Text style={styles.expiry}>Exp: 12/28</Text> */}
         </View>
       </View>
     </View>
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
  const [isShown , setShow] = useState(true)
  const toggleComponent =()=>{
    setShow(!isShown)
  }
  return (
   <View>
    {isShown ?(
       <View style={styles.curvedView}>
       <Text style={{fontWeight:'bold' , fontSize:18 , marginLeft:15 ,marginTop:15}}>Your Card Details</Text>
       <View style={{marginTop:10 , marginLeft:15}}>
         <Text style={{ fontSize:14 , color:'grey'}}>Card Name</Text>
         <View style={{flexDirection:'row' , rowGap:20 , marginTop:5}}>
         <Text style={{fontWeight:70 , fontSize:18 , color:'black' , flex:3}}>DOUGGIE</Text>
         <TouchableOpacity style={{flex:1}} >
        <View style={styles.container4} ><FontAwesomeIcon icon={faClipboard} size={15} /></View>
         </TouchableOpacity>
         </View>
       </View>
       <View style={{marginTop:10 , marginLeft:15}}>
         <Text style={{ fontSize:14 , color:'grey'}} >Card Number</Text>
         <View style={{flexDirection:'row'}}>
         <Text style={{fontWeight:70 , fontSize:16 , color:'black' , flex:3}}>510040*******9822</Text>
         <TouchableOpacity  style={{flex:1}}>
        <View style={styles.container4} ><FontAwesomeIcon icon={faClipboard} size={15} /></View>
         </TouchableOpacity>
         </View>
       </View>
       <TouchableOpacity style={styles.container3} onPress={toggleComponent}>
         <Text style={{fontWeight:80 , fontSize:16 ,color:'black'}}>Show all</Text>
       </TouchableOpacity>
     </View>
    ):(
      <Showall/>
    )}
   </View>
  )
}
const Showall =()=>{
  const [isShown , setShow] = useState(true)
  const toggleComponent =()=>{
    setShow(!isShown)
  }
  return (
    <View>
      {isShown?(
          <View style={styles.curvedView2}>
          <Text style={{fontWeight:'bold' , fontSize:18 , marginLeft:15 ,marginTop:15}}>Your Card Details</Text>
          <View style={{marginTop:10 , marginLeft:15}}>
            <Text  style={{ fontSize:14 , color:'grey'}}>Card Name</Text>
            <View style={{flexDirection:'row' , rowGap:20 , marginTop:5}}>
            <Text  style={{fontWeight:70 , fontSize:18 , color:'black' , flex:3}}>DOUGGIE</Text>
            <TouchableOpacity style={{flex:1}} >
           <View style={styles.container4} ><FontAwesomeIcon icon={faClipboard} size={15} /></View>
            </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop:10 , marginLeft:15}}>
            <Text style={{ fontSize:14 , color:'grey'}}>Card Number</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:70 , fontSize:16 , color:'black' , flex:3}}>5100401005649822</Text>
            <TouchableOpacity  style={{flex:1}}>
           <View style={styles.container4} ><FontAwesomeIcon icon={faClipboard} size={15} /></View>
            </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop:10 , marginLeft:15}}>
            <Text style={{ fontSize:14 , color:'grey'}}>CV</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:70 , fontSize:16 , color:'black' , flex:3}}>123</Text>
            <TouchableOpacity  style={{flex:1}}>
           <View style={styles.container4} ><FontAwesomeIcon icon={faClipboard} size={15} /></View>
            </TouchableOpacity>
            </View>
          </View> 
          <View style={{marginTop:10 , marginLeft:15}}>
              <Text  style={{ fontSize:14 , color:'grey'}}>Expiry Date</Text>
              <View style={{flexDirection:'row'}}>
              <Text style={{fontWeight:70 , fontSize:16 , color:'black' , flex:3}}>12/26</Text>
              <TouchableOpacity style={{flex:1}} >
           <View style={styles.container4} ><FontAwesomeIcon icon={faClipboard} size={15} /></View>
            </TouchableOpacity>
              </View>
            </View> 
            <TouchableOpacity style={styles.container3} onPress={toggleComponent}>
              <Text style={{fontWeight:80 , fontSize:16 ,color:'black'}}>Hide</Text>
            </TouchableOpacity>
        </View>
      ):(
        <CardDetails/>
      )}
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
  container3: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
    borderRadius: 50,
    width: 80,
    height: 35,
    marginLeft:150,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
    
  },
  container4: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
    borderRadius: 50,
    width: 24,
    height: 24,
    marginLeft:5,
  },
  cardContainer: {
    alignItems: 'center',
    marginTop: 30,
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
    marginTop:12,
  },
  cardNumber: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  cardInfoContainer: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHolderName: {
    color: 'white',
    fontSize: 30,
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
    width: 380,
    height: 220,
    backgroundColor: 'white',
    marginLeft:15,
    borderRadius: 20, // Adjust this value for the desired curve
  },
  curvedView2: {
    marginTop:10,
    width: 380,
    height: 320,
    backgroundColor: 'white',
    marginLeft:15,
    borderRadius: 20, // Adjust this value for the desired curve
  },

})