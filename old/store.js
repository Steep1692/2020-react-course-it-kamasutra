import profileReducer from "../src/redux/reducers/profileReducer";
import dialogsReducer from "../src/redux/reducers/dialogsReducer";
import sidebarReducer from "../src/redux/reducers/sidebarReducer";

class Store {
    _subscriber() {
        throw 'The subscriber should be set!';
    }
    constructor() {
        this._state = {
            profilePage: {
                textareaValue: '',
                posts: [
                    {
                        message: 'I don\'t take this too seriously!',
                        author: 'Dmitry',
                        likesCount: 12,
                    },
                    {
                        message: 'No way!',
                        author: 'Dmitry',
                        likesCount: 55,
                    },
                ],
            },
            dialogsPage: {
                dialogsRow: [
                    {
                        name: 'Ti',
                        id: 1,
                        message: 'What\'s the point?',
                    },
                    {
                        name: 'Kony',
                        id: 2,
                        message: 'Need this asap.',
                    }
                ],
                dialog: {
                    id: 1,
                    interlocutor: 'Ti',
                    messages: [
                        {
                            message: 'This is rather a suggestive comment',
                            author: 'Dmitry',
                        },
                        {
                            message: 'You are lucky!',
                            author: 'Ti',
                        },
                        {
                            message: 'What\'s the point?',
                            author: 'Dmitry',
                        },
                    ],
                },
            },
            sidebar: {
                navBar: {
                    links: [
                        {
                            to: '/profile',
                            name: 'Profile',
                        },
                        {
                            to: '/d',
                            name: 'Messages',
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
            },
        }
    }

    getState() {
        return this._state;
    }

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._subscriber();
    }

    subscribe(observer) {
        this._subscriber = observer;
    }
}

export default Store;