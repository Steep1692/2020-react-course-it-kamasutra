import instance from "./instance";

export default {
    getProfile: (id) => instance.get(`profile/${id}`),
    getStatus: (id) => instance.get(`profile/status/${id}`),
    updateStatus: (status) => instance.put(`profile/status?status=${status}`),
};