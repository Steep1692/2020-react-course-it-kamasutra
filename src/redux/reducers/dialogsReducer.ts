import {ActionCreatorType} from "../../models/redux";
import {DialogRowType, DialogType} from "../../models/dialogs";

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
    ] as DialogRowType,
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

const dialogsReducer = (state = initialState, action: DialogsReducerTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const message = action.data.messageText;

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

type SendMessageType = {
    type: typeof SEND_MESSAGE
    data: {
        messageText: string
    }
}

type DialogsReducerTypes = SendMessageType

export const sendMessage: ActionCreatorType<SendMessageType> = (messageText: string) => ({
    type: SEND_MESSAGE,
    data: {
        messageText,
    },
});

export default dialogsReducer;