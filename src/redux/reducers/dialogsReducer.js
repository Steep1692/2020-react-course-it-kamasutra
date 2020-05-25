const SEND_MESSAGE = 'dialog/SEND-MESSAGE';

const initialState = {
    dialogs: [
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
};

const dialogsReducer = (state = initialState, {type, data}) => {
    switch (type) {
        case SEND_MESSAGE: {
            const message = data.messageText;

            return {
                ...state,
                textareaValue: '',
                dialog: {
                    ...state.dialog,
                    messages: [
                        ...state.dialog.messages,
                        {
                            message,
                            author: 'Dmitry',
                        },
                    ],
                },
            };
        }
        default:
            return state;
    }
};

export const sendMessage = (messageText) => ({
    type: SEND_MESSAGE,
    data: {
        messageText,
    },
});
export default dialogsReducer;