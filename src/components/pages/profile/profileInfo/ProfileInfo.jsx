import React from 'react';
import s from './ProfileInfo.module.css';
import PreLoader from "../../../common/preLoader/PreLoader";
import Avatar from "../../../common/avatar/Avatar";
import EditableLabel from "./editableLabel/EditableLabel";
import {isTheSameAsStrings} from "../../../../utils/helpers";

const ProfileInfo = ({profile, status, isOwner, updateStatus, updateProfile}) => {
    if ( !profile ) {
        return <PreLoader/>;
    }

    const { photos, fullName, aboutMe, updateAvatar, lookingForAJobDescription,
        lookingForAJob, contacts, } = profile;
    let avatar = photos.large || photos.small;

    const onAvatarChange = ({target:{files}}) => {
        files && updateAvatar(files[0]);
    };
    const onProfileInfoChange = (key, newValue) => {
        const currentKeyValue = profile[key];

        if( !isTheSameAsStrings(currentKeyValue, newValue) ) {
            updateProfile({
                ...profile,
                [key]: newValue,
            });
        }
    };
    const onContactsChange = (key, newValue) => {
        const currentKeyValue = profile.contacts[key];

        if( !isTheSameAsStrings(currentKeyValue, newValue) ) {
            updateProfile({
                ...profile,
                contacts: {
                    ...profile.contacts,
                    [key]: newValue,
                },
            });
        }
    };

    const contactElements = Object.keys(contacts).map((key, index) => (
        <li key={index}>
            <EditableLabel
                canEdit={isOwner}
                beforeLabel={key}
                label={contacts[key]}
                updateLabel={(newValue) => { onContactsChange(key, newValue); }}
            />
        </li>
    ));

    return (
        <div className={s.profileInfo}>
            <div className={s.wrapAvatar}>
                <Avatar image={avatar} />
            </div>
            { isOwner && <input type="file" onChange={onAvatarChange}/> }
            <div className={s.wrapInfo}>
                <h3>{ fullName }</h3>
                <EditableLabel
                    canEdit={isOwner}
                    beforeLabel="About me"
                    label={aboutMe}
                    updateLabel={(newValue) => { onProfileInfoChange('aboutMe', newValue); }}
                />
                <EditableLabel
                    canEdit={isOwner}
                    beforeLabel="Status"
                    label={status}
                    updateLabel={updateStatus}
                />
                { lookingForAJob && <EditableLabel
                    canEdit={isOwner}
                    beforeLabel="Looking for a job"
                    label={lookingForAJobDescription}
                    updateLabel={(newValue) => { onProfileInfoChange('lookingForAJobDescription', newValue); }}
                />}
                <ul>
                    { contactElements }
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;
