import instance from "./instance";
import {ApiResponse} from "../models/common";

export default {
    follow: (id: number) => instance.post<ApiResponse>(`/follow/${id}`),
    unfollow: (id: number) => instance.delete<ApiResponse>(`/follow/${id}`),
};