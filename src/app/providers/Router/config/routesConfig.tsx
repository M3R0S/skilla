import { RoutesConfig } from "./routesConfig.types";

import { CallsPage } from "pages/Calls";
import { MainPage } from "pages/Main";
import { PathRoutes } from "shared/config/router/pathRoutes";

export const routesConfig: RoutesConfig = {
    MAIN: {
        routeId: 1,
        path: PathRoutes.MAIN,
        element: <MainPage />,
    },
    CALLS: {
        routeId: 2,
        path: PathRoutes.CALLS,
        element: <CallsPage />,
    },
};

