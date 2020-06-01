import authAPI from "../../api/auth"
import {stopSubmit} from "redux-form"
import errors from '../../assets/dictonary/errors.json'
import {ThunkType} from "../../models/redux"
import {ResponseCodes} from "../../utils/enums"
import {fetchCaptcha} from "./security"
import {AuthResponse} from "../../models/auth"
import {InferActionsTypes} from "../store";

type InitialStateType = AuthResponse & {
    isAuth: boolean,
}

const initialState: InitialStateType = {
    email: null as string | null,
    login: null as string | null,
    id: null as number | null,
    isAuth: false as boolean,
}

const auth = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_AUTH_DATA':
            return {
                ...state,
                ...action.data.authData,
            }
        case 'auth/SET_IS_AUTH':
            return {
                ...state,
                isAuth: action.data.flag,
            }

        default:
            return state
    }
}

const actions = {
    setAuthData: (authData: AuthResponse) => ({
        type: 'auth/SET_AUTH_DATA',
        data: {
            authData,
        },
    }) as const,
    setIsAuth: (flag: boolean) => ({
        type: 'auth/SET_IS_AUTH',
        data: {
            flag,
        },
    }) as const,
}

export const authMe: ThunkType = () => async (dispatch: Function) => {
    const { data, resultCode } = await authAPI.me()

    if(resultCode === ResponseCodes.SUCCESS) {
        const {
            id,
            login,
            email,
        } = data

        dispatch(
            actions.setAuthData({
                id,
                login,
                email,
            })
        )
        dispatch( actions.setIsAuth(true) )
    }
}
export const login: ThunkType = (formData) => async (dispatch: Function) => {
    try {

        const { resultCode, messages, data } = await authAPI.login(formData)


        if (resultCode === ResponseCodes.SUCCESS) {
            const {
                userId,
            } = data

            dispatch(
                actions.setAuthData({
                    id: userId,
                    email: null,
                    login: null,
                })
            )
            dispatch( actions.setIsAuth(true) )
        } else if (resultCode === ResponseCodes.ANTI_BOT) {
            dispatch( fetchCaptcha() )
        }

        dispatch(stopSubmit('login', {
            _error:  messages.join('\n'),
        }))

    } catch(error) {

        dispatch(stopSubmit('login', {
            _error: errors.nointernet,
        }))

    }
}
export const logout: ThunkType = () => async (dispatch: Function) => {
    await authAPI.logout()

    const {
        id,
        login,
        email,
        isAuth,
    } = initialState

    dispatch(
        actions.setAuthData({
            id,
            login,
            email,
        })
    )
    dispatch( actions.setIsAuth(isAuth) )
}

export default auth

type ActionTypes = InferActionsTypes<typeof actions>
