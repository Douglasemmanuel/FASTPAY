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
import Splashscreen from "../screen/Splashscreen";
import Entrypinscreen from "../screen/Entrypinscreen";
import OtherScreeen from "../screen/OtherScreeen";
import Cardscreen from "../screen/Cardscreen";
import BeneficiariesScreen from "../screen/BeneficiariesScreen";
import AccountDetailsscren from "../screen/AccountDetailsscren";
import OtherAccountscreen from "../screen/OtherAccountscreen";
import CardTransactionscreen from "../screen/CardTransactionscreen";
import BankTransferscreen from "../screen/BankTransferscreen";
import Historyscreen from "../screen/Historyscreen";
import Profilescreen from "../screen/Profilescreen";
import Airtimescreen from "../screen/Airtimescreen";
import Electricityscreen from '../screen/Electricityscreen'
import Amountscreen from "../screen/Amountscreen";
const Stack = createStackNavigator()
export default function Navigation(){
    const onboard = useSelector((state)=> state.onboard)
    const authenticated = useSelector((state)=> state.authenticated)
    return (
        <NavigationContainer>
            {/* <StatusBar barstyle='dark-content'/> */}
            <Stack.Navigator initialRouteName='intro'  screenOptions={{ headerStyle: { backgroundColor: 'white' }, headerTintColor: 'black' }}>
                {!onboard?(
                   <>
                    <Stack.Screen  name='onboard' component={Onboardscreen}/>
                    <Stack.Screen name='intro' component={Splashscreen} />
                    
                   </> 
                ):!authenticated? (
                    <>
                    <Stack.Screen name='intro' component={Splashscreen} />
                    <Stack.Screen  name='entrypin' component={Entrypinscreen}/>
                <Stack.Screen name='login' component={Loginscreen}/>
                <Stack.Screen name='signup' component={Signupscreen}/>
                <Stack.Screen name='card' component={Cardscreen} />
                <Stack.Screen  name='home' component={Bottomnavigation}  options={{headerShown:false}}/>
                <Stack.Screen name='forget' component={ForgetPassword}/>
                <Stack.Screen  name='transfer' component={Transferscreen}/>
                <Stack.Screen name='other'  component={OtherScreeen}/>
                <Stack.Screen  name='beneficiaries' component={BeneficiariesScreen}/>
                <Stack.Screen name='accountdetails' component={AccountDetailsscren} />
                <Stack.Screen name='topup' component={OtherAccountscreen} />
                <Stack.Screen  name='cardtransactions'  component={CardTransactionscreen}/>
                <Stack.Screen name='banktransfer' component={BankTransferscreen} />
                <Stack.Screen  name='history' component={Historyscreen}/>
                <Stack.Screen name='profile' component={Profilescreen} />
                <Stack.Screen  name='airtime' component={Airtimescreen}/>
                <Stack.Screen  name='electricity' component={Electricityscreen}/>
                <Stack.Screen name='amount' component={Amountscreen} />
                </>
                ):(
                    <>
                     <Stack.Screen  name='entrypin' component={Entrypinscreen}/>
                    <Stack.Screen name='intro' component={Splashscreen} />
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