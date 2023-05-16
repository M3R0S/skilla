import { FC } from "react";
import { Provider } from "react-redux";

import { StoreProviderProps } from "./StoreProvider.types";
import { store } from "../config/store";

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children } = props;

    return <Provider store={store}>{children}</Provider>;
};

