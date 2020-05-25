import authAPI from "../../api/auth";
import {stopSubmit} from "redux-form";
import errors from '../../assets/dictonary/errors.json';

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const SET_IS_AUTH = 'auth/SET_IS_AUTH';

const initialState = {
    email: null,
    login: null,
    id: null,
    isAuth: false,
};

const auth = (state = initialState, {type, data}) => {
    switch (type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...data,
            };
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: data.flag,
            };

        default:
            return state;
    }
};

export const setAuthData = (data) => {
  return {
      type: SET_AUTH_DATA,
      data,
  };
};
export const setIsAuth = (flag) => {
  return {
      type: SET_IS_AUTH,
      flag,
  };
};

export const authMe = () => async (dispatch) => {
    const { data } = await authAPI.me();

    if(data.resultCode === 0) {
        const {
            id,
            login,
            email,
        } = data.data;

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
export const login = () => (dispatch) => {
    authAPI.login()
        .then(({data}) => {
            if(data.resultCode === 0) {
                const {
                    id,
                    login,
                    email,
                } = data.data;

                dispatch(
                    setAuthData({
                        id,
                        login,
                        email,
                    })
                );
                dispatch( setIsAuth(true) );
            }
        })
        .catch(() => {
            dispatch(stopSubmit('login', {
                _error:  errors.nointernet,
            }));
        });
};
export const logout = () => async (dispatch) => {
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