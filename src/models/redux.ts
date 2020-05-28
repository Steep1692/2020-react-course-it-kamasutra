export type ActionType = {
    type: string,
    data: any,
};
export type ActionCreatorType<T = ActionType> = (...args: any) => T;
export type ThunkType = (...args: any) => (dispatch: Function) => Promise<void>;