import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Input.module.scss";
import { InputProps } from "./Input.types";

export const Input: FC<InputProps> = memo((props) => {
    const { className, ...otherProps } = props;

    return (
        <input
            className={classNames(cl.input, className)}
            {...otherProps}
        />
    );
});

