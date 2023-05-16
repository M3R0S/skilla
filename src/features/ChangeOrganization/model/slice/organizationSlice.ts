import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { OrganizationState } from "../types/organization"

const initialState: OrganizationState = {
    value: "Все организации"
};

export const organizationSlice = createSlice({
    name: "organization",
    initialState,
    reducers: {
        changeValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    },
});

export const organizationActions = organizationSlice.actions;
export const organizationReducer = organizationSlice.reducer;

