export type PostType = {
    id?: number
    message: string
    author: string
    likesCount: number
}

export type PostsRowType = Array<PostType>

export type ProfilePhotosType = {
    small: string | null
    large: string | null
}

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type ProfileInfoType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number | null
}

export type ProfileType = ProfileInfoType & {
    photos: ProfilePhotosType
}

export type ProfileStatusResponseType = string | null