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
        state = "default",
    } = props;

    const additional = [className, cl[theme], cl[`size_${size}`], cl[state]];

    return <button className={classNames(cl.button, additional)}>{children}</button>;
};

const ButtonMemo = memo<ButtonMemoProps>(ButtonNotMemo);

export const Button = Object.assign(ButtonMemo, { NotMemo: ButtonNotMemo });

