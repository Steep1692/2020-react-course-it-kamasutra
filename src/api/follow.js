import instance from "./instance";

export default {
    follow: (id) => instance.post(`/follow/${id}`),
    unfollow: (id) => instance.delete(`/follow/${id}`),
};