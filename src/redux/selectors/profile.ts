import {AppStateType} from "../store";

export const getProfile = ({profileReducer}: AppStateType) => profileReducer.profile;
export const getStatus = ({profileReducer}: AppStateType) => profileReducer.status;
export const getPosts = ({profileReducer}: AppStateType) => profileReducer.posts;
