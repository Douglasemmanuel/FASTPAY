import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity  , TouchableWithoutFeedback} from 'react-native'
import UserImage from '../components/UserImage'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faKey}  from "@fortawesome/free-solid-svg-icons/faKey"
import {faArrowRight}  from "@fortawesome/free-solid-svg-icons/faArrowRight"
import {faArrowLeft}  from "@fortawesome/free-solid-svg-icons/faArrowLeft"
import {faShield}  from "@fortawesome/free-solid-svg-icons/faShield"
import {faChevronRight}  from "@fortawesome/free-solid-svg-icons/faChevronRight"
import {faArrowRightFromBracket}  from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket"
import {faEnvelope}  from "@fortawesome/free-solid-svg-icons/faEnvelope"
import {faUser}  from "@fortawesome/free-solid-svg-icons/faUser"
import {faLock}  from "@fortawesome/free-solid-svg-icons/faLock"
import {faMobileScreen}  from "@fortawesome/free-solid-svg-icons/faMobileScreen"
import {faUsersViewfinder}  from "@fortawesome/free-solid-svg-icons/faUsersViewfinder"

const Profilescreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])
function move(){
  navigation.goBack()
}
  return (
    <SafeAreaView>
    <View style={{marginLeft:15}}>
    <View style={{flexDirection:'row'}} onPress={move}>
            <TouchableOpacity style={{marginTop:5  }} onPress={move}>
            <FontAwesomeIcon icon={faArrowLeft} size={20}  />
            </TouchableOpacity>
      </View>
      {/* <Text>Profilescreen</Text> */}
      <Head/>
      <Personal/>
      <Security/>
      <Logout/>
    </View>
    </SafeAreaView>
  )
}
const Head =()=>{
  return(
    <View style={{flexDirection:'row' }}>
      <Text style={{flex:3 , fontWeight:'bold' , fontSize:28 , marginTop:5}}>Hello , Doggie</Text>
      <View style={{flex:1}}><UserImage/></View>
    </View>
  )
}
const Security=()=>{
  return (
    <View style={{marginTop:20}}>
    <Text style={{ color:'grey' , fontSize:15}}>SECURITY</Text>
    <View style={styles.curvedView2}>
    <TouchableOpacity style={{ marginTop:15}} >
      <View style={{flexDirection:'row' , marginLeft:20 }}>
      <View style={{flex:1 , marginTop:6}}><FontAwesomeIcon icon={faShield}  size={20}/></View>
      <View style={{flex:5}}>
      <Text >Confirmation Method</Text>
      <Text>Transaction PIN</Text>
      </View>
      <View style={{flex:1}}><FontAwesomeIcon icon={faChevronRight} /></View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{ marginTop:20}} >
      <View style={{flexDirection:'row' , marginLeft:20 }}>
      <View style={{flex:1}}><FontAwesomeIcon icon={faKey}  size={20}/></View>
      <Text style={{flex:5}}>Change Transaction PIN</Text>
      <View style={{flex:1}}><FontAwesomeIcon icon={faChevronRight} /></View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{ marginTop:20}} >
      <View style={{flexDirection:'row' , marginLeft:20}}>
      <View style={{flex:1}}><FontAwesomeIcon icon={faLock}  size={20}/></View>
      <Text style={{flex:5}}>Change password</Text>
      <View style={{flex:1}}><FontAwesomeIcon icon={faChevronRight} /></View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{ marginTop:20}} >
      <View style={{flexDirection:'row' , marginLeft:20 }}>
      <View style={{flex:1}}><FontAwesomeIcon icon={faUsersViewfinder}  size={25}/></View>
      <Text style={{flex:5}}>Use Face ID</Text>
      <View style={{flex:1}}><FontAwesomeIcon icon={faChevronRight} /></View>
      </View>
    </TouchableOpacity>
    </View>
</View>
  )
}
const Personal=()=>{
  return (
    <View style={{marginTop:20}}>
      <Text style={{ color:'grey' , fontSize:15}}>ACCOUNT</Text>
        <View style={styles.curvedView1}>
        <TouchableWithoutFeedback>
          <View style={{flexDirection:'row' , marginLeft:20 , marginTop:15}}>
          <View style={{flex:1}}><FontAwesomeIcon icon={faUser}  size={20}/></View>
         <View style={{flex:5}}>
         <Text >Doggie</Text>
         <Text style={{color:'grey' , fontSize:12}} >Full name</Text>
         </View>
          {/* <View style={{flex:1}}><FontAwesomeIcon icon={faChevronRight} /></View> */}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={{flexDirection:'row' , marginLeft:20 , marginTop:15}}>
          <View style={{flex:1}}><FontAwesomeIcon icon={faMobileScreen}  size={20}/></View>
          <Text style={{flex:5}}>+23490101001001</Text>
          {/* <View style={{flex:1}}><FontAwesomeIcon icon={faChevronRight} /></View> */}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={{flexDirection:'row' , marginLeft:20 , marginTop:15}}>
          <View style={{flex:1}}><FontAwesomeIcon icon={faEnvelope}  size={20}/></View>
          <View style={{flex:5}}>
          <Text >d*******@gmail.com</Text>
          <Text style={{color:'grey' , fontSize:12}}>E-mail</Text>
          </View>
          {/* <View style={{flex:1}}><FontAwesomeIcon icon={faChevronRight} /></View> */}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={{flexDirection:'row' , marginLeft:20 , marginTop:15}}>
          <View style={{flex:1}}><FontAwesomeIcon icon={faUser}  size={20}/></View>
          <Text style={{flex:5}}>Account Verificaion</Text>
          <View style={{flex:1.5}}><Text style={{color:'green'}}>Verified</Text></View>
          </View>
        </TouchableWithoutFeedback>
        </View>
    </View>
  )
}
const Logout =()=>{
  return (
    <View style={{marginTop:20}}>
        <View style={styles.curvedView}>
        <TouchableOpacity>
          <View style={{flexDirection:'row' , marginLeft:20 , marginTop:15}}>
          <View style={{flex:1}}><FontAwesomeIcon icon={faArrowRightFromBracket}  size={20}/></View>
          <Text style={{flex:5}}>Log out</Text>
          <View style={{flex:1}}><FontAwesomeIcon icon={faChevronRight} /></View>
          </View>
        </TouchableOpacity>
        </View>
    </View>
  )
}
export default Profilescreen

const styles = StyleSheet.create({
  curvedView: {
    // marginTop:10,
    // marginBottom:30,
    width: 380,
    height: 50,
    backgroundColor: 'white',
    // marginLeft:10,
    borderRadius: 5, // Adjust this value for the desired curve
  },
  curvedView1: {
    marginTop:6,
    // marginBottom:30,
    width: 380,
    height: 200,
    backgroundColor: 'white',
    // marginLeft:10,
    borderRadius: 5, // Adjust this value for the desired curve
  },
  curvedView2: {
    marginTop:6,
    // marginBottom:30,
    width: 380,
    height: 200,
    backgroundColor: 'white',
    // marginLeft:10,
    borderRadius: 5, // Adjust this value for the desired curve
  },
})