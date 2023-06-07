import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

import { rtkApi } from "shared/api/rtkApi";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
