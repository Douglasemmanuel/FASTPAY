import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native';
const Userinfo = () => {
    const [isMorning , setIsMorning] = useState(false);
    const [isAfternoon , setIsAfternoon] = useState(false);
    const [isEvening , setIsEvening] = useState(false);
    useEffect(()=>{
        //check if it was morning
        const checkIsMorning = ()=>{
            const currentDate = new Date();
            const currentHour = currentDate.getHours();

            //define the evening time range
            const morningStarHour = 0;
            const morningEndHour = 12;
            //check if the current hour is within the evening range
            const isMorningTime = currentHour >= morningStarHour && currentHour <=  morningEndHour;

            //update the state based on the result
            setIsMorning(isMorningTime)
        };
        //check if it was Afternoon
        const checkIsAfternoon = ()=>{
            const currentDate = new Date();
            const currentHour = currentDate.getHours();

            //define the evening time range
            const afternoonStarHour = 12;
            const afternoonEndHour = 17;
            //check if the current hour is within the evening range
            const isAfternoonTime = currentHour >= afternoonStarHour && currentHour <=  afternoonEndHour;

            //update the state based on the result
            setIsAfternoon(isAfternoonTime)
        };
        //check if it was Evening
        const checkIsEvening = ()=>{
            const currentDate = new Date();
            const currentHour = currentDate.getHours();

            //define the evening time range
            const eveningStarHour = 18;
            const eveningEndHour = 24;
            //check if the current hour is within the evening range
            const isEveningTime = currentHour >= eveningStarHour && currentHour <=  eveningEndHour;

            //update the state based on the result
            setIsEvening(isEveningTime)
        };
        checkIsMorning();
        checkIsAfternoon();
        checkIsEvening();
    },[])
  return (
    <SafeAreaView>
    <View>
      <Text> Hello Doggie</Text>
      <View>
        {isMorning?(
        <Morning/>
        ):isAfternoon?(
            <Afternoon/>
        ):isEvening?(
            <Evening/>
        ):(
            <Text>Hey user</Text>
        )}
      </View>
    </View>
    </SafeAreaView>
  )
}
const Morning = ()=>{
    return (
        <Text style={styles.text}>Good morning</Text>
    )
}
const Afternoon = ()=>{
    return (
        <Text style={styles.text}>Good Afternoon</Text>
    )
}
const Evening = ()=>{
    return (
        <Text style={styles.text}>Good Evening</Text>
    )
}
export default Userinfo

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
    }
})