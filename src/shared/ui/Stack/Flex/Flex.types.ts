import { ReactNode } from "react";

export type FlexJustifyContent = "normal" | "start" | "center" | "end" | "space_between";
export type FlexAlignItems = "normal" | "start" | "center" | "end";
export type FlexDirection = "column" | "row";
export type FlexGap = "4" | "7" | "8" | "16" | "32" | "56" | "64" | "86";
export type FlexWrap = "nowrap" | "wrap";
export type FlexTag = keyof JSX.IntrinsicElements;

export interface FlexProps {
    className?: string;
    children: ReactNode;
    Tag?: FlexTag;
    justifyContent?: FlexJustifyContent;
    alignItems?: FlexAlignItems;
    direction: FlexDirection;
    rowGap?: FlexGap;
    columnGap?: FlexGap;
    wrap?: FlexWrap;
    gap?: FlexGap;
    max?: boolean;
}

