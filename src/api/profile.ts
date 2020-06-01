import instance from "./instance";
import {ProfilePhotosType, ProfileInfoType, ProfileStatusResponseType} from "../models/profile";
import {ApiResponse} from "../models/common";

export default {
    getProfile: (id: number) => instance.get<ApiResponse<ProfileInfoType>>(`profile/${id}`),
    updateProfile: (profile: ProfileInfoType) => instance.put<ApiResponse<ProfileInfoType>>(`profile/`, profile),
    getStatus: (id: number) => instance.get<ApiResponse<ProfileStatusResponseType>>(`profile/status/${id}`),
    updateStatus: (status: string) => instance.put<ApiResponse>(`profile/status?status=${status}`),
    updateAvatar: (file: any) => {
        const formData = new FormData();
        formData.append('image', file);

        return instance.put<ApiResponse<ProfilePhotosType>>(`profile/photo`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        });
    },
};