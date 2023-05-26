import { FC } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import cl from "./AppLink.module.scss";
import { AppLinkProps } from "./AppLink.types";

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children, to, ...otherProps } = props;

    return (
        <Link
            to={to}
            className={classNames(cl.applink, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

