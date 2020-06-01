import {AppStateType} from "../store";

export const getNavBar = ({sidebarReducer}: AppStateType) => sidebarReducer.navBar;
export const getFriendBlock = ({sidebarReducer}: AppStateType) => sidebarReducer.friendsBlock;