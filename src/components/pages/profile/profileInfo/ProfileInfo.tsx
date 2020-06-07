import React, {FC} from 'react'
import s from './ProfileInfo.module.css'
import PreLoader from '../../../common/preLoader/PreLoader'
import Avatar from '../../../common/avatar/Avatar'
import EditableLabel from './editableLabel/EditableLabel'
import {isTheSameAsStrings} from '../../../../utils/helpers'
import {
    ContactsType,
    ProfileInfoType,
    ProfileStatusResponseType,
    ProfileType
} from "../../../../models/profile";

type Props = {
    profile: ProfileType
    status: ProfileStatusResponseType
    isOwner: boolean
    updateStatus: () => void
    updateAvatar: (file: File) => void
    updateProfile: (profile: ProfileInfoType) => void
}

const ProfileInfo: FC<Props> = ({profile, status, isOwner,
                                    updateStatus, updateAvatar, updateProfile}) => {
    if ( !profile ) { return <PreLoader/> }

    const { photos, fullName, aboutMe, lookingForAJobDescription,
        lookingForAJob, contacts, } = profile
    let avatar = photos.large || photos.small

    const onAvatarChange = ({target:{files}}: React.ChangeEvent<HTMLInputElement>) => {
        files && updateAvatar(files[0])
    }
    const onProfileInfoChange = (key: keyof ProfileType, newValue: string) => {
        const currentKeyValue = profile[key]

        if( !isTheSameAsStrings(currentKeyValue, newValue) ) {
            updateProfile({
                ...profile,
                [key]: newValue,
            })
        }
    }
    const onContactsChange = (key: keyof ContactsType, newValue: string) => {
        const currentKeyValue = profile.contacts[key]

        if( !isTheSameAsStrings(currentKeyValue, newValue) ) {
            updateProfile({
                ...profile,
                contacts: {
                    ...profile.contacts,
                    [key]: newValue,
                },
            })
        }
    }

    const contactElements = Object.keys(contacts).map((key, index) => {
        return (
            <li key={index}>
                <EditableLabel
                    canEdit={isOwner}
                    beforeLabel={key}
                    label={contacts[key as keyof ContactsType]}
                    updateLabel={(newValue) => {
                        onContactsChange(key as keyof ContactsType, newValue)
                    }}
                />
            </li>
        )
    })

    return (
        <div className={s.profileInfo}>
            <div className={s.wrapAvatar}>
                <Avatar image={avatar} />
            </div>
            { isOwner && <input type='file' onChange={onAvatarChange}/> }
            <div className={s.wrapInfo}>
                <h3>{ fullName }</h3>
                <EditableLabel
                    canEdit={isOwner}
                    beforeLabel='About me'
                    label={aboutMe}
                    updateLabel={(newValue) => { onProfileInfoChange('aboutMe', newValue) }}
                />
                <EditableLabel
                    canEdit={isOwner}
                    beforeLabel='Status'
                    label={status}
                    updateLabel={updateStatus}
                />
                { lookingForAJob && <EditableLabel
                    canEdit={isOwner}
                    beforeLabel='Looking for a job'
                    label={lookingForAJobDescription}
                    updateLabel={(newValue) => { onProfileInfoChange('lookingForAJobDescription', newValue) }}
                />}
                <ul>
                    { contactElements }
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo
