import profileAPI from "../../api/profile";
import {ResponseCodes} from "../../utils/enums";
import {ActionCreatorType, ActionType, ThunkType} from "../../models/redux";
import {ProfileType, PostType, ProfilePhotosType, ProfileInfoType} from "../../models/profile";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET-USER-STATUS';
const UPDATE_AVATAR_SUCCESS = 'profile/UPDATE-AVATAR-SUCCESS';

let initialState = {
    profile: {
        aboutMe: '',
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {
            small: null,
            large: null,
        },
    } as ProfileType,
    status: '' as string,
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
    ] as Array<PostType>,
};

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, {type, data}: ActionType): InitialStateType => {
    switch (type) {
        case ADD_POST: {
            const message = data.postText;

            return {
                ...state,
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
        case UPDATE_AVATAR_SUCCESS: {
            const photos: ProfilePhotosType = {
                small: 'fds',
                large: 'fds',
            };

            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos,
                },
            };
        }
        default:
            return state;
    }
};

export const addPost: ActionCreatorType = (postText: string) => ({
    type: ADD_POST,
    data: {
        postText,
    },
});
export const setUserProfile: ActionCreatorType = (profile: ProfileInfoType) => ({
    type: SET_USER_PROFILE,
    data: {
        profile,
    },
});
export const setUserStatus: ActionCreatorType = (status: string) => ({
    type: SET_USER_STATUS,
    data: {
        status,
    },
});
export const updateAvatarSuccess: ActionCreatorType = (photos: ProfilePhotosType) => ({
    type: SET_USER_STATUS,
    data: {
        photos,
    },
});

export const fetchProfile: ThunkType = (id: number) => async (dispatch) => {
    const { data } = await profileAPI.getProfile(id);

    dispatch( setUserProfile(data) );
};
export const fetchStatus: ThunkType = (id: number) => async (dispatch) => {
    const { data } = await profileAPI.getStatus(id);

    dispatch( setUserStatus(data) );
};
export const updateStatus: ThunkType = (status: string) => async (dispatch) => {
    const { data } = await profileAPI.updateStatus(status);
    console.log(data)
    // dispatch( setUserStatus(data) );
};
export const updateAvatar: ThunkType = (file) => async (dispatch) => {
    const { data } = await profileAPI.updateAvatar(file);
    dispatch( updateAvatarSuccess(data) );
};
export const updateProfile: ThunkType = (newProfile: ProfileInfoType) => async (dispatch) => {
    const { data } = await profileAPI.updateProfile(newProfile);

    if(data.resultCode === ResponseCodes.SUCCESS) {
        fetchProfile(newProfile.userId);
    }
};
export default profileReducer;