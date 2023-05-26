import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

import { callsApi } from "widgets/BillingCalls";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(callsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

