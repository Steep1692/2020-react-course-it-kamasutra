import React from 'react';
import s from './ProfileContainer.module.css';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";
import Wallpaper from "./wallpaper/Wallpaper";
import {connect} from "react-redux";
import {
    setUserProfile,
    getProfile,
    getStatus,
    updateStatus,
} from "../../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 8364;

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        const {
            profile,
            updateStatus,
            status,
        } = this.props;

        return (
            <main className={s.profile}>
                <Wallpaper/>
                <div className={s.profileInfo}>
                    <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
                    <MyPostsContainer/>
                </div>
            </main>
        );
    }
}

const mapStateToProps = ({profileReducer}) => ({
    profile: profileReducer.profile,
    status: profileReducer.status,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {
        setUserProfile,
        getProfile,
        getStatus,
        updateStatus,
    }),
)(ProfileContainer);
