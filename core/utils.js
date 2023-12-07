import { Platform } from "react-native";

function log(){
    //much better console.log function that formats/indents
    //objects for better redability
    for(let i = 0 ; i< arguments.length; i++){
        let arg = arguments[i]
        // stringify and indent object
        if(typeof arg === 'object' ){
            arg = JSON.stringify(arg , null , 2)
        }
        console.log(`[${Platform.OS}]`,arg)
    }
}

export default{log}