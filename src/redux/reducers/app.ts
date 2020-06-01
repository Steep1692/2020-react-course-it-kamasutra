import {InferActionsTypes} from "../store"

const initialState = {
    isAppInitialized: false as boolean,
    errors: [] as Array<string>,
}


const app = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-IS-APP-INITIALIZED':
            return {
                ...state,
                isAppInitialized: action.data.flag,
            }
        default:
            return state
    }
}

export const actions = {
    setIsAppInitialized: (flag: boolean) => ({
        type: 'APP/SET-IS-APP-INITIALIZED',
        data: {
            flag,
        },
    }) as const
}

export default app

export type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>
