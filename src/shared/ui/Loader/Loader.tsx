import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Loader.module.scss";
import { LoaderProps } from "./Loader.types";

import { ReactComponent as LoaderSvg } from "shared/assets/svg/Loader.svg";

export const Loader: FC<LoaderProps> = memo((props) => {
    const { className, theme = "app" } = props;

    return (
        <div className={classNames(cl.loader, className, cl[theme])}>
            <LoaderSvg className={cl.svg} />
        </div>
    );
});

