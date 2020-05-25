import profileAPI from "../../api/profile";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET-USER-STATUS';

let initialState = {
    profile: null,
    status: '',
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
};

const profileReducer = (state = initialState, {type, data}) => {
    switch (type) {
        case ADD_POST: {
            const message = data.postText;

            return {
                ...state,
                textareaValue: '',
                posts: [
                    {
                        id: 5,
                        message,
                        author: 'Dmitry',
                        likesCount: 5,
                    },
                    ...state.posts,
                ],
            };
        }
        case SET_USER_PROFILE: {
            const {profile} = data;

            return {
                ...state,
                profile,
            };
        }
        case SET_USER_STATUS: {
            const {status} = data;

            return {
                ...state,
                status,
            };
        }
        default:
            return state;
    }
};

export const addPost = (postText) => ({
    type: ADD_POST,
    data: {
        postText,
    },
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    data: {
        profile,
    },
});
export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    data: {
        status,
    },
});

export const getProfile = (id) => async (dispatch) => {
    const { data } = await profileAPI.getProfile(id);

    dispatch( setUserProfile(data) );
};
export const getStatus = (id) => async (dispatch) => {
    const { data } = await profileAPI.getStatus(id);

    dispatch( setUserStatus(data) );
};
export const updateStatus = (id) => async (dispatch) => {
    const { data } = await profileAPI.updateStatus(id);
    console.log(data)
    // dispatch( setUserStatus(data) );
};
export default profileReducer;