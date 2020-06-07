import React from 'react'
import s from './ProfileContainer.module.css'

import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './profileInfo/ProfileInfo'
import Wallpaper from './wallpaper/Wallpaper'
import {connect, ConnectedProps} from 'react-redux'
import {
    setUserProfile,
    fetchProfile,
    fetchStatus,
    updateStatus, updateAvatar, updateProfile,
} from '../../../redux/reducers/profileReducer'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {getProfile, getStatus} from '../../../redux/selectors/profile'
import {getCurrentUserId} from '../../../redux/selectors/auth'
import {AppStateType} from "../../../redux/store";

const mapState = (state: AppStateType) => ({
    profile: getProfile(state),
    status: getStatus(state),
    currentUserId: getCurrentUserId(state),
})
const mapDispatch = {
    setUserProfile,
    fetchProfile,
    fetchStatus,
    updateStatus,
    updateAvatar,
    updateProfile,
}
const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

type PathParamsType = {
    userId?: string | undefined,
}

type Props = PropsFromRedux & RouteComponentProps<PathParamsType> & {}

class ProfileContainer extends React.Component<Props> {
    componentDidMount() {
        const userId = this.props.match.params.userId || 8364

        this.props.fetchProfile(userId)
        this.props.fetchStatus(userId)
    }

    render() {
        const {
            profile,
            updateStatus,
            status,
            updateAvatar,
            currentUserId,
            updateProfile,
        } = this.props
        const isOwner = Number(this.props.match.params.userId) === currentUserId

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
        )
    }
}

export default connector(withRouter(ProfileContainer))
