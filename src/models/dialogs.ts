export type DialogItemType = {
    name: string
    id: number
    message: string
}

export type MessageType = {
    message: string
    author: string
}

export type DialogType = {
    id: number
    interlocutor: string
    messages: Array<MessageType>
}

export type DialogRowType = Array<DialogItemType>