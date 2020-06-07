import {ActionType} from '../../models/redux'
import {FriendsBlockType, NavBarType} from "../../models/navbar";

const initialState = {
    navBar: {
        links: [
            {
                to: '/profile',
                name: 'Profile',
            },
            {
                to: '/dialogs',
                name: 'Messages',
            },
            {
                to: '/users',
                name: 'Users',
            },
        ],
    } as NavBarType,
    friendsBlock: {
        friends: [
            {
                name: 'Mock name',
                id: 1,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null,
                },
                status: 'mock status',
                followed: false,
            }
        ]
    } as FriendsBlockType,
}

type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, {type, data}: ActionType): InitialStateType => {
    return state
}

export default sidebarReducer