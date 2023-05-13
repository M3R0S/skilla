import ReactDOM from "react-dom/client";

import "index.scss";

import { App } from "./app/App";

const element = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(<App />);

