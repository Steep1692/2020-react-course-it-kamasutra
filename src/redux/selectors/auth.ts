import {AppStateType} from "../store";

export const getCurrentUserId = ({auth}: AppStateType) => auth.id;
export const getIsAuth = ({auth}: AppStateType) => auth.isAuth;
export const getLogin = ({auth}: AppStateType) => auth.login;
