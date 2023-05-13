import { RouteProps } from "react-router-dom";

import {  PathRoutesKey } from "shared/config/router/pathRoutes";

export type AppRouteProps = RouteProps & {
    readonly routeId: number;
};

export type RoutesConfig = Record<PathRoutesKey, AppRouteProps>;