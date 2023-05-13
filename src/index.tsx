import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "index.scss";

import { App } from "./app/App";

const element = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

