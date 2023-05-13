export const PathRoutes = {
    MAIN: "/",
    CALLS: "/calls",
} as const;

export type PathRoutesKey = keyof typeof PathRoutes;
export type PathRoutes = ValueOf<typeof PathRoutes>;

