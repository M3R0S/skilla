import { ButtonHTMLAttributes, ReactNode } from "react";

import { FlexAlignItems, FlexJustifyContent } from "../Stack";

export type ButtonTheme = "without_filling" | "primary" | "secondary" | "white_oval";
export type ButtonStatus = "default" | "hover" | "active";
export type ButtonSize = "16" | "14" | "16_icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    status?: ButtonStatus;
    size?: ButtonSize;
    justifyContent?: FlexJustifyContent;
    alignItems?: FlexAlignItems;
}

