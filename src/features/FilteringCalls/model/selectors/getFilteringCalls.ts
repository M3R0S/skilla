import { RootState } from "app/providers/Store";

export const getFilteringCalls = (state: RootState) => state.filteringCalls;
export const getFilteringCallsSearch = (state: RootState) => state.filteringCalls.search;
export const getFilteringCallsDateStart = (state: RootState) => state.filteringCalls.dateStart;
export const getFilteringCallsDateEnd = (state: RootState) => state.filteringCalls.dateEnd;
export const getFilteringCallsLimit = (state: RootState) => state.filteringCalls.limit;
export const getFilteringCallsInOut = (state: RootState) => state.filteringCalls.inOut;
export const getFilteringCallsPersons = (state: RootState) => state.filteringCalls.persons;
export const getFilteringCallsCalls = (state: RootState) => state.filteringCalls.calls;
export const getFilteringCallsErrors = (state: RootState) => state.filteringCalls.errors;
export const getFilteringCallsEstimation = (state: RootState) => state.filteringCalls.estimations;
export const getFilteringCallsSources = (state: RootState) => state.filteringCalls.sources;



