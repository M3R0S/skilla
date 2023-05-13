import { HTMLAttributes, ReactNode } from "react";

export type ButtonTheme = "without_filling" | "primary" | "secondary";
export type ButtonState = "default" | "hover" | "active";
export type ButtonSize = "16" | "14" | "16_icon";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    state?: ButtonState;
    size?: ButtonSize;
}

export interface ButtonMemoProps extends ButtonProps {
    children: string;
}

