import followAPI from "../../api/follow";
import userAPI from "../../api/users";
import {changeItemByPropName} from "../../utils/items-helpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_ITEMS_PER_PAGE = 'users/SET-ITEMS-PER-PAGE';
const SET_TOTAL_ITEMS_COUNT = 'users/SET-TOTAL-ITEMS-COUNT';
const SET_DATA_FETCHING= 'users/SET-DATA-FETCHING';
const SET_IS_FOLLOWING_FETCHING= 'users/SET-IS-FOLLOWING-FETCHING';

const initialState = {
    users: [],
    currentPage: 1,
    itemsPerPage: 5,
    totalItemsCount: 0,
    isDataFetching: false,
    isFollowingFetching: false,
    followingFetchingList: [],
};

const usersReducer = (state = initialState, {type, data}) => {
    switch (type) {
        case FOLLOW:
            return {
                ...state,
                ...changeItemByPropName(state.users, 'id', data.id, { followed: true }),
            };
        case UNFOLLOW:
            return {
                ...state,
                ...changeItemByPropName(state.users, 'id', data.id, { followed: false }),
            };
        case SET_USERS:
            return {
                ...state,
                users: data.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: data.page,
            };
        case SET_ITEMS_PER_PAGE:
            return {
                ...state,
                itemsPerPage: data.count,
            };
        case SET_TOTAL_ITEMS_COUNT:
            return {
                ...state,
                totalItemsCount: data.count,
            };
        case SET_DATA_FETCHING:
            return {
                ...state,
                isDataFetching: data.flag,
            };
        case SET_IS_FOLLOWING_FETCHING:
            const isFollowingFetching = data.flag;
            const followingFetchingList =
                isFollowingFetching ?
                    [...state.followingFetchingList,data.id,]
                    : state.followingFetchingList.filter((id) => id !== data.id);

            return {
                ...state,
                isFollowingFetching,
                followingFetchingList: [
                    ...followingFetchingList,
                ]
            };
        default:
            return state;
    }
};

export const followAC = (id) => {
  return {
      type: FOLLOW,
      data: {
        id,
      },
  };
};
export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        data: {
            id,
        },
    };
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        data: {
            users,
        },
    };
};
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        data: {
            page,
        },
    };
};
export const setTotalItemsCount = (count) => {
    return {
        type: SET_TOTAL_ITEMS_COUNT,
        data: {
            count,
        },
    };
};
export const setItemsPerPage = (count) => {
    return {
        type: SET_ITEMS_PER_PAGE,
        data: {
            count,
        },
    };
};
export const setDataFetching = (flag) => {
    return {
        type: SET_DATA_FETCHING,
        data: {
            flag,
        },
    };
};
export const setIsFollowingFetching = (flag, id) => {
    return {
        type: SET_IS_FOLLOWING_FETCHING,
        data: {
            flag,
            id,
        },
    };
};

const followUnfollowFlow = async (dispatch, apiMethod, actionCreator, id) => {
    dispatch( setIsFollowingFetching(true, id) );

    try {
        await apiMethod(id);
    } catch {}

    actionCreator(id);

    dispatch( setIsFollowingFetching(false, id) );
};
export const follow = (id) => async (dispatch) => {
    await followUnfollowFlow(dispatch, followAPI.follow, followAC, id);
};
export const unfollow = (id) => async (dispatch) => {
    await followUnfollowFlow(dispatch, followAPI.unfollow, unfollowAC, id);
};
export const fetchUsers = (itemsPerPage, page) => async (dispatch) => {
    dispatch( setDataFetching(true) );

    const { data: {items, totalCount} } = await userAPI.getUsers(itemsPerPage, page);

    dispatch( setDataFetching(false) );
    dispatch( setUsers(items) );
    dispatch( setTotalItemsCount(totalCount) );
    dispatch( setCurrentPage(page) );
};

export default usersReducer;