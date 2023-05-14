import { FC, memo } from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

import cl from "./SidebarNavItem.module.scss";
import { SidebarNavItemProps } from "./SidebarNavItem.types";

import { AppLink } from "shared/ui/AppLink";
import { Text } from "shared/ui/Text";
import { HStack } from "shared/ui/Stack";

export const SidebarNavItem: FC<SidebarNavItemProps> = memo((props) => {
    const { className, Svg, title, to } = props;

    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <AppLink.NotMemo
            to={to}
            className={classNames(cl.item, className, { [cl.active]: isActive })}
        >
            <HStack
                justifyContent="center"
                className={cl.icon_wrapper}
            >
                <Svg className={classNames(cl.icon)} />
            </HStack>
            <Text theme={isActive ? "white" : "white_transparent"} className={cl.text}>{title}</Text>
        </AppLink.NotMemo>
    );
});

