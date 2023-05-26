export const BASE_URL = "https://api.skilla.ru/";

export const CHAPTER = {
    MANGO: "mango/",
} as const;

export const ENDPOINTS = {
    GET_LIST: "getList",
    GET_RECORD: "getRecord",
} as const;

export type CHAPTER = ValueOf<typeof CHAPTER>;
export type ENDPOINTS = ValueOf<typeof ENDPOINTS>;

export const HEADERS = {
    Authorization: "Bearer testtoken",
};

