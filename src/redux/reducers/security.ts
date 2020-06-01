import securityApi from "../../api/security";
import {ActionCreatorType, ThunkType} from "../../models/redux";
const SET_CAPTCHA_URL = 'security/SET-CAPTCHA-URL';

const initialState = {
    captchaUrl: null as string | null,
};

type initialStateType = typeof initialState

const security = (state = initialState, {type, data}: SecurityTypes): initialStateType => {
    switch (type) {
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: data.url,
            };
        default:
            return state;
    }
};

type SetCaptchaUrlType = {
    type: typeof SET_CAPTCHA_URL
    data: {
        url: typeof initialState.captchaUrl
    }
}

type SecurityTypes = SetCaptchaUrlType

export const setCaptchaUrl: ActionCreatorType = (url: string) => {
  return {
      type: SET_CAPTCHA_URL,
      data: {
          url,
      },
  };
};

export const fetchCaptcha: ThunkType = () => async (dispatch) => {
    const { data: responseData } = await securityApi.getCaptchaUrl();
    const { url } = responseData;

    dispatch( setCaptchaUrl(url) );
};

export default security;