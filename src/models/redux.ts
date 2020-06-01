import {Dispatch} from "redux";

export type ActionType = {
    type: string
    data: any
}
export type ActionCreatorType<T = ActionType> = (...args: any) => T
export type ThunkType = (...args: any) => (dispatch: Dispatch) => Promise<void>