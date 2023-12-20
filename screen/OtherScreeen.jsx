import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faWallet} from "@fortawesome/free-solid-svg-icons/faWallet"
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane"
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns"
import {faPlus}  from "@fortawesome/free-solid-svg-icons/faPlus"
import {faArrowLeft}  from "@fortawesome/free-solid-svg-icons/faArrowLeft"
import {faCaretLeft}  from "@fortawesome/free-solid-svg-icons/faCaretLeft"
import {faChevronRight}  from "@fortawesome/free-solid-svg-icons/faChevronRight"
const OtherScreeen = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
  },[])
  function move(){
    // navigation.goBack()
    navigation.canGoBack()
  }
  return (
    <SafeAreaView>
        <View>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:5}} onPress={move}>
            <FontAwesomeIcon icon={faArrowLeft} size={30}  />
            </View>
            <View style={{marginLeft:10}}>
            <Text style={{fontWeight:'bold' , fontSize:30}}>Payments</Text>
            </View>
        </View>
      <View style={styles.curvedView}>
      <TouchableOpacity style={{ flexDirection:'row'}} >
      <View style={styles.container1} ><FontAwesomeIcon icon={faCaretLeft} size={25}/></View>
      <Text style={styles.text} > Buy Airtime</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
      <View style={styles.container1} ><FontAwesomeIcon icon={faCaretLeft} size={25}/></View>
      <Text style={styles.text} > Buy Airtime</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
      <View style={styles.container1} ><FontAwesomeIcon icon={faCaretLeft} size={25}/></View>
      <Text style={styles.text} > Buy Airtime</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
      <View style={styles.container1} ><FontAwesomeIcon icon={faCaretLeft} size={25}/></View>
      <Text style={styles.text} > Buy Airtime</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      
    </View>
    </View>
    </SafeAreaView>
  )
}

export default OtherScreeen

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
      container2: {
        // backgroundColor: 'white',
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 3,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        marginTop:15,
        marginLeft:200,
        // borderRadius: 50,
        // width: 50,
        // height: 50,
      
      },
      text:{
        marginTop:15,
        marginLeft:10,
        fontWeight:90,
        fontSize:15
      },
      curvedView: {
        //   width: 380,
        //   height: 90,
        //   backgroundColor: 'white',
          marginLeft:15,
          marginTop:40,
        //   justifyContent:'center',
        //   alignItems:'center' ,
          flexDirection:'column' ,  
          // rowGap:10,
          rowGap:20,
        //   borderRadius: 20, // Adjust this value for the desired curve
          borderTopRightRadius: 0,  // Set to 0 to remove right top border radius
          borderBottomRightRadius: 0,
          borderBottomLeftRadius:0,
          borderTopLeftRadius:0,
        },
})