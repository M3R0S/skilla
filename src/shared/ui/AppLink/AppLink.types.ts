import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export interface AppLinkNotMemoProps extends LinkProps {
    className?: string;
    children: ReactNode;
}

export interface AppLinkMemoProps extends AppLinkNotMemoProps {
    children: string;
}

