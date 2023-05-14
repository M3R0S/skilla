import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./SidebarLogo.module.scss";
import { SidebarLogoProps } from "./SidebarLogo.types";

import { ReactComponent as LogoSvg } from "shared/assets/svg/logo.svg";
import { PathRoutes } from "shared/config/router/pathRoutes";
import { AppLink } from "shared/ui/AppLink";

export const SidebarLogo: FC<SidebarLogoProps> = memo((props) => {
    const { className } = props;

    return (
        <AppLink.NotMemo
            className={classNames(cl.logo, [className])}
            to={PathRoutes.MAIN}
        >
            <LogoSvg />
        </AppLink.NotMemo>
    );
});

