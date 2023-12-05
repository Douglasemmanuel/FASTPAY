import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from "react-redux";
import Onboardscreen from "../screen/Onboardscreen";
import Loginscreen from "../screen/Loginscreen";
import Signupscreen from "../screen/Signupscreen";
const Stack = createNativeStackNavigator()
export default function Navigation(){
    const onboard = useSelector((state)=> state.onboard)
    const authenticated = useSelector((state)=> state.authenticated)
    return (
        <NavigationContainer>
            <StatusBar barstyle='dark-content'/>
            <Stack.Navigator>
                {!onboard?(
                   <>
                    <Stack.Screen  name='onboard' component={Onboardscreen}/>
                   </> 
                ):!authenticated? (
                <>
                <Stack.Screen name='login' component={Loginscreen}/>
                <Stack.Screen name='signup' component={Signupscreen}/>
                </>
                ):(
                    <>
                    <Stack.Screen/>
                    </>
                )
            }
            </Stack.Navigator>
        </NavigationContainer>
    )
}