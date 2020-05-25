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

const sidebarReducer = (state = initialState, {type, data}) => {
    return state;
};

export default sidebarReducer;