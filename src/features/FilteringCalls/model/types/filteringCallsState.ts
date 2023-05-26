export interface FilteringCallsState {
    dateStart: string;
    dateEnd: string;
    inOut: string;
    limit: string;
    search: string;
    persons: string
    calls: string,
    errors: FilteringErrors,
    estimations: string,
    sources: string
}

export type FilteringErrors = "" | "noerrors" | "noscript" | "1" | "2" | "3" | "4" | "5" | "6" | "7"