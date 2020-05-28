import {Validator} from "../models/common";

export const required: Validator = (value) => (value) ? undefined : 'Field is required.';
