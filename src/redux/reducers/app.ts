import {ActionCreatorType, ActionType} from "../../models/redux";

const SET_IS_APP_INITIALIZED = 'app/SET-IS-APP-INITIALIZED';

const initialState = {
    isAppInitialized: false as boolean,
    errors: [] as Array<string>,
};

export type InitialStateType = typeof initialState;

const app = (state = initialState, {type, data}: SetAppInitAction): InitialStateType => {
    switch (type) {
        case SET_IS_APP_INITIALIZED:
            return {
                ...state,
                isAppInitialized: data.flag,
            };
        default:
            return state;
    }
};

type SetAppInitAction = {
    type: typeof SET_IS_APP_INITIALIZED
    data: {
        flag: boolean
    }
}

type AppActionTypes = SetAppInitAction

export const setIsAppInitialized: ActionCreatorType = (flag: boolean): AppActionTypes => ({
      type: SET_IS_APP_INITIALIZED,
      data: {
          flag,
      },
});

export default app;