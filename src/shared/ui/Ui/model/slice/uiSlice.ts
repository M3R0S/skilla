import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Ui } from "../types/ui";

const initialState: Ui = {
    isScroll: false,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setIsScroll: (state, action: PayloadAction<boolean>) => {
            state.isScroll = action.payload;
        },
    },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

