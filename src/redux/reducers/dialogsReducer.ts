import {ActionCreatorType, ActionType} from "../../models/redux";
import {DialogItemType, DialogType} from "../../models/dialogs";

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
    ] as Array<DialogItemType>,
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
    } as DialogType,
};
type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, {type, data}: ActionType): InitialStateType => {
    switch (type) {
        case SEND_MESSAGE: {
            const message = data.messageText;

            return {
                ...state,
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

export const sendMessage: ActionCreatorType = (messageText: string) => ({
    type: SEND_MESSAGE,
    data: {
        messageText,
    },
});
export default dialogsReducer;