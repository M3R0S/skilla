import { HTMLAttributes, ReactNode } from "react";

export type TextTheme = "white" | "white_transparent" | "black" | "header" | "green" | "yellow" | "red" | "secondary" | "primary" | "blue";

export type TextTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextAlign = "left" | "center" | "right";

export type TextSize = "18" | "16" | "15" | "14";

export type TextAttributes = HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>;

export interface TextNotMemoProps extends TextAttributes {
    children: ReactNode;
    Tag?: TextTag;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export interface TextMemoProps extends TextNotMemoProps {
    children: string
}


