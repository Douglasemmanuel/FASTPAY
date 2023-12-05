import { SET_ONBOARDING_STATUS } from "../constant/Onboardconstant";

export const setOnboardingStatus = (isOnboarded) => {
    return {
      type: SET_ONBOARDING_STATUS,
      payload: isOnboarded,
    };
  };