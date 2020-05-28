import {ActionType} from "../../models/redux";

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
    },
    friendsBlock: {
        friends: [
            {
                id: 1,
                name: 'Dmitry',
            },
            {
                id: 2,
                name: 'Ti',
            },
        ]
    },
};

type InitialStateType = typeof initialState;

const sidebarReducer = (state = initialState, {type, data}: ActionType): InitialStateType => {
    return state;
};

export default sidebarReducer;