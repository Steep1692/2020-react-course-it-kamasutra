import React from "react"
import {connect, ConnectedProps} from 'react-redux'

import {
    follow,
    unfollow,
    setCurrentPage,
    fetchUsers,
} from '../../../redux/reducers/usersReducer'
import {
    getUsers,
    getCurrentPage,
    getItemsPerPage,
    getTotalItemsCount,
    getIsDataFetching,
    getFollowingFetchingList,
} from '../../../redux/selectors/users'

import UsersRow from './usersRow/UsersRow'
import {AppStateType} from "../../../redux/store";
import {UserType} from "../../../models/users";

const mapState = (state: AppStateType) => ({
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    itemsPerPage: getItemsPerPage(state),
    totalItemsCount: getTotalItemsCount(state),
    isDataFetching: getIsDataFetching(state),
    followingFetchingList: getFollowingFetchingList(state),
})

const mapDispatch = {
    follow,
    unfollow,
    setCurrentPage,
    fetchUsers,
}

const connector = connect(mapState, mapDispatch)
type ReduxType = ConnectedProps<typeof connector>
type Props = ReduxType & {}

class UsersContainer extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchUsers(this.props.itemsPerPage, this.props.currentPage);
    }

    onPageClick = (page: number) => {
        this.props.fetchUsers(this.props.itemsPerPage, page);
    }
    onFollowBtnClick = (user: UserType) => {
        const {id, followed} = user;

        if(followed) {
            this.props.unfollow(id)
        } else {
            this.props.follow(id)
        }
    }

    render() {
        const {
            users,
            totalItemsCount,
            itemsPerPage,
            currentPage,
            isDataFetching,
            followingFetchingList,
        } = this.props;

        return (
            <UsersRow
                users={users}
                totalItemsCount={totalItemsCount}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageClick={this.onPageClick}
                onFollowBtnClick={this.onFollowBtnClick}
                isDataFetching={isDataFetching}
                followingFetchingList={followingFetchingList}
            />
        );
    }
}



export default connector(UsersContainer);