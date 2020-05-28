import React from "react";
import {connect} from 'react-redux';

import {
    follow,
    unfollow,
    setCurrentPage,
    fetchUsers,
} from '../../../redux/reducers/usersReducer';
import {
    getUsers,
    getCurrentPage,
    getItemsPerPage,
    getTotalItemsCount,
    getIsDataFetching,
    getFollowingFetchingList,
} from '../../../redux/selectors/users';

import UsersRow from './usersRow/UsersRow';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.fetchUsers(this.props.itemsPerPage, this.props.currentPage);
    }

    onPageClick = (page) => {
        this.props.fetchUsers(this.props.itemsPerPage, page);
    }
    onFollowBtnClick = (user) => {
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
            setUsers,
            isDataFetching,
            isFollowingFetching,
            followingFetchingList,
        } = this.props;

        return (
            <UsersRow
                users={users}
                totalItemsCount={totalItemsCount}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageClick={this.onPageClick}
                setUsers={setUsers}
                onFollowBtnClick={this.onFollowBtnClick}
                isDataFetching={isDataFetching}
                isFollowingFetching={isFollowingFetching}
                followingFetchingList={followingFetchingList}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    itemsPerPage: getItemsPerPage(state),
    totalItemsCount: getTotalItemsCount(state),
    isDataFetching: getIsDataFetching(state),
    followingFetchingList: getFollowingFetchingList(state),
});

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    fetchUsers,
})(UsersContainer);