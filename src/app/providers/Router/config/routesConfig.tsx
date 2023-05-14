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
    COUNTERPARTIES: {
        routeId: 3,
        path: PathRoutes.COUNTERPARTIES,
        element: <MainPage />,
    },
    DOCUMENTS: {
        routeId: 4,
        path: PathRoutes.DOCUMENTS,
        element: <MainPage />,
    },
    KNOWLEDGE_BASE: {
        routeId: 5,
        path: PathRoutes.KNOWLEDGE_BASE,
        element: <MainPage />,
    },
    MESSAGES: {
        routeId: 6,
        path: PathRoutes.MESSAGES,
        element: <MainPage />,
    },
    ORDERS: {
        routeId: 7,
        path: PathRoutes.ORDERS,
        element: <MainPage />,
    },
    PERFORMERS: {
        routeId: 8,
        path: PathRoutes.PERFORMERS,
        element: <MainPage />,
    },
    REPORTS: {
        routeId: 9,
        path: PathRoutes.REPORTS,
        element: <MainPage />,
    },
    RESULTS: {
        routeId: 10,
        path: PathRoutes.RESULTS,
        element: <MainPage />,
    },
    SETTINGS: {
        routeId: 11,
        path: PathRoutes.SETTINGS,
        element: <MainPage />,
    },
};

