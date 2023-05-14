import { memo } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import cl from "./AppLink.module.scss";
import { AppLinkNotMemoProps, AppLinkMemoProps } from "./AppLink.types";

const AppLinkNotMemo = <P extends AppLinkNotMemoProps>(props: P) => {
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

const AppLinkMemo = memo<AppLinkMemoProps>(AppLinkNotMemo);

export const AppLink = Object.assign(AppLinkMemo, { NotMemo: AppLinkNotMemo });

