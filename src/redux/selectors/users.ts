import {AppStateType} from "../store";

export const getUsers = ({usersReducer}: AppStateType) => usersReducer.users;
export const getCurrentPage = ({usersReducer}: AppStateType) => usersReducer.currentPage;
export const getItemsPerPage = ({usersReducer}: AppStateType) => usersReducer.itemsPerPage;
export const getTotalItemsCount = ({usersReducer}: AppStateType) => usersReducer.totalItemsCount;
export const getIsDataFetching = ({usersReducer}: AppStateType) => usersReducer.isDataFetching;
export const getFollowingFetchingList = ({usersReducer}: AppStateType) => usersReducer.followingFetchingList;
