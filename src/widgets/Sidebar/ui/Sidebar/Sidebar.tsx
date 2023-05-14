import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.types";
import { SidebarNavList } from "../SidebarNavList/SidebarNavList";
import { SidebarLogo } from "../SidebarLogo/SidebarLogo";

import { AddOrder } from "features/AddOrder";
import { Payment } from "features/Payment";
import { VStack } from "shared/ui/Stack";

export const Sidebar: FC<SidebarProps> = memo((props) => {
    const { className } = props;

    return (
        <VStack
            Tag="section"
            rowGap="32"
            className={classNames(cl.sidebar, className)}
        >
            <SidebarLogo />
            <VStack
                alignItems="center"
                rowGap="64"
            >
                <SidebarNavList />
                <VStack rowGap="32">
                    <AddOrder />
                    <Payment />
                </VStack>
            </VStack>
        </VStack>
    );
});

