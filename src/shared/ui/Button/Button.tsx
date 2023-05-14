import { memo } from "react";
import classNames from "classnames";

import cl from "./Button.module.scss";
import { ButtonMemoProps, ButtonProps } from "./Button.types";

const ButtonNotMemo = <P extends ButtonProps>(props: P) => {
    const {
        className,
        children,
        theme = "without_filling",
        size = "14",
        justifyContent = "center",
        alignItems = "center",
        ...otherProps
    } = props;

    const additional = [
        className,
        cl[theme],
        cl[`size_${size}`],
        cl[`justify_content_${justifyContent}`],
        cl[`align_items_${alignItems}`],
    ];

    return (
        <button
            className={classNames(cl.button, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
};

const ButtonMemo = memo<ButtonMemoProps>(ButtonNotMemo);

export const Button = Object.assign(ButtonMemo, { NotMemo: ButtonNotMemo });

