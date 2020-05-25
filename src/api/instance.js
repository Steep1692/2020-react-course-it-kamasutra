import * as axios from "axios";

export default axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    // withCredentials: true,
    // headers: {
    //     'API-KEY': 'some-key',
    // },
});