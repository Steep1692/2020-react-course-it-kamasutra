import React, {FC} from "react";

import UserItem from "../../../common/userItem/UserItem";
import PreLoader from "../../../common/preLoader/PreLoader";
import Paginator from "../../../common/paginator/Paginator";
import {UsersRowType, UserType} from "../../../../models/users";

// Used required to not to create declaration file for css module
let s = require('./UsersRow.module.css');

type Props = {
    users: UsersRowType,
    totalItemsCount: number,
    itemsPerPage: number,
    currentPage: number,
    onPageClick: (page: number) => void,
    onFollowBtnClick: (user: UserType) => void,
    isDataFetching: boolean,
    followingFetchingList: number[],
}

const UsersRow: FC<Props> = ({
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