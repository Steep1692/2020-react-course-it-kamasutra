import React from 'react';
import s from './ProfileInfo.module.css';
import defaultAvatar from "../../../../assets/images/profileAvatar.png";
import ProfileStatus from "./profileStatus/ProfileStatus";
import PreLoader from "../../../common/preLoader/PreLoader";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if ( !profile ) {
        return <PreLoader/>;
    }

    const {
        photos,
        fullName,
        aboutMe,
    } = profile;
    let avatar = photos.large || defaultAvatar || photos.small;

    return (
        <div className={s.profileInfo}>
            <div className={s.wrapAvatar}>
                <img
                    src={ avatar }
                    alt="Avatar"
                />
            </div>
            <div className={s.wrapInfo}>
                <h3>{ fullName }</h3>
                <p>{ aboutMe }</p>
                <ProfileStatus
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    );
};

export default ProfileInfo;
