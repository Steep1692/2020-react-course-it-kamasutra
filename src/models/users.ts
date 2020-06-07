import {ProfilePhotosType, ProfileStatusResponseType} from "./profile";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: ProfilePhotosType
    status: ProfileStatusResponseType
    followed: boolean
}

export type UsersRowType = Array<UserType>

export type GetUsersResponse = {
    items: UsersRowType
    totalCount: number
}