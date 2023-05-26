import { ReactNode } from "react";

export interface ListBoxOption<V = string> {
    value: V;
    content: ReactNode;
    title?: string
}

export type ListTheme = "none" | "organization" | "filter"

export interface ListBoxProps<V> {
    className?: string;
    theme?: ListTheme;
    options: ListBoxOption<V>[];
    value?: V
    defaultValue: string
    onChangeValue: (value: V) => void
}
