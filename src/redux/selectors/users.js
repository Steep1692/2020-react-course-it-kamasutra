export const getUsers = ({usersReducer}) => usersReducer.users;
export const getCurrentPage = ({usersReducer}) => usersReducer.currentPage;
export const getItemsPerPage = ({usersReducer}) => usersReducer.itemsPerPage;
export const getTotalItemsCount = ({usersReducer}) => usersReducer.totalItemsCount;
export const getIsDataFetching = ({usersReducer}) => usersReducer.isDataFetching;
export const getFollowingFetchingList = ({usersReducer}) => usersReducer.followingFetchingList;
