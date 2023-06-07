import type { CallsState } from "../types/calls";

import { FilteringCallsState } from "features/FilteringCalls";
import { dateNow } from "shared/lib/helpers/dateNow";
import { CHAPTER, ENDPOINTS } from "shared/api/api";
import { rtkApi } from "shared/api/rtkApi";

export const callsApi = rtkApi.injectEndpoints({
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

                return {
                    url: `${CHAPTER.MANGO}/${ENDPOINTS.GET_LIST}`,
                    params: {
                        date_start: dateStart ? dateStart : date,
                        date_end: dateEnd ? dateEnd : date,
                        in_out: inOut,
                        limit: limit ? limit : "100",
                        search,
                        "from_persons[]": persons,
                        "from_type[]": calls,
                        "errors[]": estimations === "noscript" ? "noscript" : estimations,
                        "sources[]": sources,
                    },
                };
            },
        }),
    }),
});

export const { useLazyGetCallsListQuery, useGetCallsListQuery } = callsApi;
