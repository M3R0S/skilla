import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Text.module.scss";
import { TextProps } from "./Text.types";

export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        children,
        Tag = "span",
        theme = "white",
        align = "left",
        size = "16",
        ...otherProps
    } = props;

    return (
        <Tag
            className={classNames(cl.text, [cl[theme], cl[align], cl[`size_${size}`], className])}
            {...otherProps}
        >
            {children}
        </Tag>
    );
});

