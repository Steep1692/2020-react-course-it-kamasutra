import {FriendsRowType} from "./friends";

export type FriendsBlockType = {
    friends: FriendsRowType
}

export type LinkType = {
    to: string
    name: string
}

export type LinksRowType = LinkType[]

export type NavBarType = {
    links: LinksRowType
}
