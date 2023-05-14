import { HTMLAttributes, ReactNode } from "react";

import { FlexAlignItems, FlexJustifyContent } from "../Stack";

export type ButtonTheme = "without_filling" | "primary" | "secondary";
export type ButtonStatus = "default" | "hover" | "active";
export type ButtonSize = "16" | "14" | "16_icon";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    status?: ButtonStatus;
    size?: ButtonSize;
    justifyContent?: FlexJustifyContent;
    alignItems?: FlexAlignItems;
}

export interface ButtonMemoProps extends ButtonProps {
    children: string;
}

