import React from 'react';
import s from './SidebarContainer.module.css';
import Navbar from "./navbar/Navbar";
import FriendsBlock from "./friendsBlock/FriendsBlock";
import {connect} from "react-redux";

const SidebarContainer = ({navBar, friendsBlock}) => {
    return (
        <aside className={s.aside}>
            <Navbar state={navBar}/>
            <FriendsBlock state={friendsBlock}/>
        </aside>
    );
};

const mapStateToProps = ({sidebarReducer}) => ({
    navBar: sidebarReducer.navBar,
    friendsBlock: sidebarReducer.friendsBlock,
});

export default connect(mapStateToProps, {})(SidebarContainer);
