import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from "react-redux";
import Onboardscreen from "../screen/Onboardscreen";
import Loginscreen from "../screen/Loginscreen";
import Signupscreen from "../screen/Signupscreen";
import ForgetPassword from "../screen/ForgetPassword";
import Transferscreen from "../screen/Transferscreen";
import Bottomnavigation from "./Bottomnavigation";
const Stack = createStackNavigator()
export default function Navigation(){
    const onboard = useSelector((state)=> state.onboard)
    const authenticated = useSelector((state)=> state.authenticated)
    return (
        <NavigationContainer>
            {/* <StatusBar barstyle='dark-content'/> */}
            <Stack.Navigator>
                {!onboard?(
                   <>
                    <Stack.Screen  name='onboard' component={Onboardscreen}/>
                    
                   </> 
                ):!authenticated? (
                <>
                <Stack.Screen name='login' component={Loginscreen}/>
                <Stack.Screen name='signup' component={Signupscreen}/>
                <Stack.Screen name='forget' component={ForgetPassword}/>
                <Stack.Screen  name='transfer' component={Transferscreen}/>
                <Stack.Screen  name='home' component={Bottomnavigation}  options={{headerShown:false}}/>
                </>
                ):(
                    <>
                    {/* <Stack.Screen  name='transfer' component={Transferscreen}/>
                    <Stack.Screen  name='home' component={Bottomnavigation}/> */}
                    <Stack.Screen />
                    </>
                )
            }
            </Stack.Navigator>
        </NavigationContainer>
    )
}