import { memo } from "react";
import classNames from "classnames";

import cl from "./Text.module.scss";
import { TextNotMemoProps, TextMemoProps } from "./Text.types";

const TextNotMemo = <P extends TextNotMemoProps>(props: P) => {
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
};

const TextMemo = memo<TextMemoProps>(TextNotMemo);

export const Text = Object.assign(TextMemo, { NotMemo: TextNotMemo });

