import instance from "./instance";
import {GetCaptchaUrlResponse} from "../models/security";

export default {
    getCaptchaUrl: () => instance.get<GetCaptchaUrlResponse>(`security/get-captcha-url`),
};