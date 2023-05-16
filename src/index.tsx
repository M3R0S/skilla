import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "index.scss";

import { App } from "./app/App";

import { StoreProvider } from "app/providers/Store";

const element = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>
);

