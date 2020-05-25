const SET_IS_APP_INITIALIZED = 'app/SET-IS-APP-INITIALIZED';

const initialState = {
    isAppInitialized: true,
    errors: [],
};

const app = (state = initialState, {type, data}) => {
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

export const setIsAppInitialized = (flag) => {
  return {
      type: SET_IS_APP_INITIALIZED,
      data: {
          flag,
      },
  };
};

export default app;