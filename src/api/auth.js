import instance from "./instance";

export default {
    me: () => instance.get(`auth/me`),
    login: (formData) => instance.post(`auth/login`, formData),
    logout: () => instance.delete(`auth/login`),
};