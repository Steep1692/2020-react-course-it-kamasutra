import {ProfileInfoType} from "./profile";

export type GetUsersResponse = {
    items: Array<ProfileInfoType>
    totalCount: number
}