import instance from "./instance";
import {ApiResponse} from "../models/common";
import {Credentials, LoginResponse, AuthResponse} from "../models/auth";

export default {
    me: () => instance.get<ApiResponse<AuthResponse>>(`auth/me`).then(({data}) => data),
    login: (formData: Credentials) => instance.post<ApiResponse<LoginResponse>>(`auth/login`, formData).then(({data}) => data),
    logout: () => instance.delete<ApiResponse>(`auth/login`),
};