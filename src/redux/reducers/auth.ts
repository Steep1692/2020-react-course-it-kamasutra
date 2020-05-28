import authAPI from "../../api/auth";
import {stopSubmit} from "redux-form";
import errors from '../../assets/dictonary/errors.json';
import {ActionCreatorType, ThunkType} from "../../models/redux";
import {ResponseCodes} from "../../utils/enums";
import {fetchCaptcha} from "./security";
import {AuthResponse} from "../../models/auth";

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const SET_IS_AUTH = 'auth/SET_IS_AUTH';

type InitialStateType = AuthResponse & {
    isAuth: boolean,
}

const initialState: InitialStateType = {
    email: null as string | null,
    login: null as string | null,
    id: null as number | null,
    isAuth: false as boolean,
};

const auth = (state = initialState, action: AuthActions): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.authData,
            };
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.flag,
            };

        default:
            return state;
    }
};

interface SetAuthDataAction {
    type: typeof SET_AUTH_DATA
    authData: AuthResponse
}

interface SetAuthStatusAction {
    type: typeof SET_IS_AUTH
    flag: boolean
}

type AuthActions = SetAuthDataAction | SetAuthStatusAction

export const setAuthData = (authData: AuthResponse): AuthActions => {
  return {
      type: SET_AUTH_DATA,
      authData,
  };
};
export const setIsAuth = (flag: boolean): AuthActions => {
  return {
      type: SET_IS_AUTH,
      flag,
  };
};

export const authMe: ThunkType = () => async (dispatch: Function) => {
    const {data, resultCode} = await authAPI.me();

    if(resultCode === ResponseCodes.SUCCESS) {
        const {
            id,
            login,
            email,
        } = data;

        dispatch(
            setAuthData({
                id,
                login,
                email,
            })
        );
        dispatch( setIsAuth(true) );
    }
};
export const login: ThunkType = (formData) => async (dispatch: Function) => {
    try {

        const { data: { resultCode, messages, data } } = await authAPI.login(formData);

        if (resultCode === ResponseCodes.SUCCESS) {
            const {
                id,
                login,
                email,
            } = data;

            dispatch(
                setAuthData({
                    id,
                    login,
                    email,
                })
            );
            dispatch( setIsAuth(true) );
        } else if (resultCode === ResponseCodes.ANTI_BOT) {
            dispatch( fetchCaptcha() );
        }

        dispatch(stopSubmit('login', {
            _error:  messages.join('\n'),
        }));

    } catch(error) {

        dispatch(stopSubmit('login', {
            _error: errors.nointernet,
        }));

    }
};
export const logout: ThunkType = () => async (dispatch: Function) => {
    await authAPI.logout();

    const {
        id,
        login,
        email,
        isAuth,
    } = initialState;

    dispatch(
        setAuthData({
            id,
            login,
            email,
        })
    );
    dispatch( setIsAuth(isAuth) );
};

export default auth;