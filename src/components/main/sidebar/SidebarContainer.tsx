import React, {FC} from 'react';
import Navbar from "./navbar/Navbar";
import FriendsBlock from "./friendsBlock/FriendsBlock";
import {connect} from "react-redux";
import {getFriendBlock, getNavBar} from "../../../redux/selectors/sidebar";
import {AppStateType} from "../../../redux/store";

// Is require because of ts needs css modules to declare itself
const s = require('./SidebarContainer.module.css');

type Props = {
    navBar: any
    friendsBlock: any
}
const SidebarContainer: FC<Props> = ({navBar, friendsBlock}) => {
    return (
        <aside className={s.aside}>
            <Navbar state={navBar}/>
            <FriendsBlock state={friendsBlock}/>
        </aside>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    navBar: getNavBar(state),
    friendsBlock: getFriendBlock(state),
});

export default connect(mapStateToProps, {})(SidebarContainer);
