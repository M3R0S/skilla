import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL, HEADERS } from "./api";

export const rtkApi = createApi({
    reducerPath: "rtkApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        headers: HEADERS,
        method: "POST",
        paramsSerializer: (params) => {
            const newParams = new URLSearchParams();

            for (const key in params) {
                if (params[key]) {
                    newParams.append(key, params[key])
                }
            }

            return newParams
                .toString()
                .split("&")
                .map((param) => decodeURIComponent(param))
                .join("&");
        },
    }),
    endpoints: () => ({}),
});

