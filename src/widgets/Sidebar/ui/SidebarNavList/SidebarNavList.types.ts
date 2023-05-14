import { FC, SVGProps } from "react";

import { PathRoutes } from "shared/config/router/pathRoutes";

export interface SidebarNavListProps {
    className?: string;
}

export interface SidebarNavList {
    id: number;
    Svg: FC<SVGProps<SVGSVGElement>>;
    title: string;
    to: PathRoutes;
}

