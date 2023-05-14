import { HTMLAttributes } from "react";

export type TextTheme = "white" | "white_transparent" | "black";

export type TextTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextAlign = "left" | "center" | "right";

export type TextSize = "16";

export type TextAttributes = HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>;

export interface TextProps extends TextAttributes {
    children: string;
    Tag?: TextTag;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

