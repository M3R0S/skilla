export const PathRoutes = {
    MAIN: "/",
    RESULTS: "/results",
    ORDERS: "/orders",
    MESSAGES: "/messages",
    CALLS: "/calls",
    COUNTERPARTIES: "/counterparties",
    DOCUMENTS: "/documents",
    PERFORMERS: "/performers",
    REPORTS: "/reports",
    KNOWLEDGE_BASE: "/knowledge-base",
    SETTINGS: "/settings"

} as const;

export type PathRoutesKey = keyof typeof PathRoutes;
export type PathRoutes = ValueOf<typeof PathRoutes>;

