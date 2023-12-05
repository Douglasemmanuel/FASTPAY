import { INITIALIZED_ONBOARD_SCREEN } from "../constant/Splashconstant";


const initialState={
    isOnboarded : false
}

export const OnboardReducers = (state=initialState, action)=>{
    switch(action.type){
        case INITIALIZED_ONBOARD_SCREEN:
            return {
                ...state,
                isOnboarded:action.payload
            };
    }
}