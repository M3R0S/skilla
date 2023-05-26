import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { CallsState } from "../types/calls";

import { FilteringCallsState } from "features/FilteringCalls";
import { dateNow } from "shared/lib/helpers/dateNow";
import { BASE_URL, CHAPTER, ENDPOINTS, HEADERS } from "shared/api/api";

export const callsApi = createApi({
    reducerPath: "callsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + CHAPTER.MANGO,
        headers: HEADERS,
        method: "POST",
    }),
    endpoints: (builder) => ({
        getCallsList: builder.query<CallsState, FilteringCallsState | null>({
            query: (params) => {
                const date = dateNow(new Date());

                if (!params) {
                    return "";
                }

                const {
                    search,
                    dateEnd,
                    dateStart,
                    inOut,
                    limit,
                    persons,
                    calls,
                    estimations,
                    sources,
                } = params;

                let query: string = ENDPOINTS.GET_LIST;

                if (dateStart) {
                    query += `?date_start=${dateStart}`;
                }
                else {
                    query += `?date_start=${date}`;
                }

                if (dateEnd) {
                    query += `&date_end=${dateEnd}`;
                }
                else {
                    query += `&date_end=${date}`;
                }

                if (inOut) {
                    query += `&in_out=${inOut}`;
                }

                if (limit) {
                    query += `&limit=${limit}`;
                }

                if (search) {
                    query += `&search=${search}`;
                }

                if (persons) {
                    query += `&from_persons[]=${persons}`;
                }

                if (calls) {
                    query += `&from_type[]=${calls}`;
                }

                if (estimations === "noscript") {
                    query += `&errors[]=noscript`;
                }

                if (sources) {
                    query += `&sources[]=${sources}`;
                }

                return query;
            },
        }),
    }),
});

export const { useLazyGetCallsListQuery, useGetCallsListQuery } = callsApi;

