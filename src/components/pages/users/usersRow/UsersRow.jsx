import React from "react";

import s from './UsersRow.module.css';
import UserItem from "../../../common/userItem/UserItem";
import PreLoader from "../../../common/preLoader/PreLoader";
import Paginator from "../../../common/paginator/Paginator";

const UsersRow = ({
                      users,
                      totalItemsCount,
                      itemsPerPage,
                      currentPage,
                      onPageClick,
                      onFollowBtnClick,
                      isDataFetching,
                      followingFetchingList,
                  }) => {
    const usersElements = users.map((user, key) => {
        const followBtnDisabled = followingFetchingList.includes(user.id);
        return (
            <UserItem
                key={key}
                user={user}
                followBtnDisabled={followBtnDisabled}
                onFollowBtnClick={onFollowBtnClick}
            />
        );
    });

    return (
        <div className={s.usersRow}>
            <h3>Users</h3>
            <Paginator
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItemsCount={totalItemsCount}
                onPageClick={onPageClick}
            />
            {
                (isDataFetching) ? <PreLoader/>
                    : <ul>{usersElements}</ul>
            }
        </div>
    );
}

export default UsersRow;