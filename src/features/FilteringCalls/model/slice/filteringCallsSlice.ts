import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { FilteringCallsState, FilteringErrors } from "../types/filteringCallsState";

import { dateNow } from "shared/lib/helpers/dateNow";

const dateEnd = dateNow(new Date());

function getDateStart() {
    const date = new Date();
    date.setTime(date.getTime() - 60 * 60 * 1000 * 24 * 3);
    return dateNow(date);
}

const initialState: FilteringCallsState = {
    dateStart: getDateStart(),
    dateEnd: dateEnd,
    inOut: "",
    limit: "100",
    search: "",
    persons: "",
    calls: "",
    errors: "",
    estimations: "",
    sources: "",
};

export const filteringCallsSlice = createSlice({
    name: "filteringCalls",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setDateEnd: (state, action: PayloadAction<string>) => {
            state.dateEnd = action.payload;
        },
        setDateStart: (state, action: PayloadAction<string>) => {
            state.dateStart = action.payload;
        },
        setLimit: (state, action: PayloadAction<string>) => {
            state.limit = action.payload;
        },
        setInOut: (state, action: PayloadAction<string>) => {
            state.inOut = action.payload;
        },
        setPersons: (state, action: PayloadAction<string>) => {
            state.persons = action.payload;
        },
        setCalls: (state, action: PayloadAction<string>) => {
            state.calls = action.payload;
        },
        setErrors: (state, action: PayloadAction<FilteringErrors>) => {
            state.errors = action.payload;
        },
        setEstimations: (state, action: PayloadAction<string>) => {
            state.estimations = action.payload;
        },
        setSources: (state, action: PayloadAction<string>) => {
            state.sources = action.payload;
        },
    },
});

export const filteringCallsActions = filteringCallsSlice.actions;

