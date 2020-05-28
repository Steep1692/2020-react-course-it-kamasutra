import React from 'react';
import s from './ProfileContainer.module.css';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";
import Wallpaper from "./wallpaper/Wallpaper";
import {connect} from "react-redux";
import {
    setUserProfile,
    fetchProfile,
    fetchStatus,
    updateStatus, updateAvatar, updateProfile,
} from "../../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getProfile, getStatus} from "../../../redux/selectors/profile";
import {getCurrentUserId} from "../../../redux/selectors/auth";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 8364;

        this.props.fetchProfile(userId);
        this.props.fetchStatus(userId);
    }

    render() {
        const {
            profile,
            updateStatus,
            status,
            updateAvatar,
            currentUserId,
            updateProfile,
        } = this.props;

        const isOwner = this.props.match.params.userId === currentUserId;
        return (
            <main className={s.profile}>
                <Wallpaper/>
                <div className={s.profileInfo}>
                    <ProfileInfo
                        profile={profile}
                        status={status}
                        updateStatus={updateStatus}
                        updateAvatar={updateAvatar}
                        isOwner={isOwner}
                        updateProfile={updateProfile}
                    />
                    <MyPostsContainer/>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    currentUserId: getCurrentUserId(state),
});

export default compose(
    withRouter,
    connect(mapStateToProps, {
        setUserProfile,
        fetchProfile,
        fetchStatus,
        updateStatus,
        updateAvatar,
        updateProfile,
    }),
)(ProfileContainer);
