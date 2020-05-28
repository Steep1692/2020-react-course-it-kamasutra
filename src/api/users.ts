import instance from "./instance";
import {GetUsersResponse} from "../models/users";

export default {
    getUsers: (count: number, page: number) =>
        instance.get<GetUsersResponse>(`users?count=${count}&page=${page}`).then(({data}) => data),
};