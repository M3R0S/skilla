import { FC, memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import { routesConfig } from "../config/routesConfig";
import { AppRouteProps } from "../config/routesConfig.types";

import { Loader } from "shared/ui/Loader";

export const AppRouter: FC = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const { path, routeId, element } = route;

        const component = <Suspense fallback={<Loader theme="app" />}>{element}</Suspense>;

        return (
            <Route
                element={component}
                path={path}
                key={routeId}
            />
        );
    }, []);

    return <Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>;
});

