import { SET_ONBOARDING_STATUS } from "../constant/Onboardconstant";

const initialState = {
    isOnboarded: false,
};


export const OnboardReducer = (state=initialState , action)=>{
    switch (action.type) {
        case SET_ONBOARDING_STATUS:
          return {
            ...state,
            isOnboarded: action.payload,
            // isOnboarded: true,
          };
        default:
          return state;
      }
}