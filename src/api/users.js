import instance from "./instance";

export default {
    getUsers: (count, page) => instance.get(`users?count=${count}&page=${page}`),
};