import { FC, memo } from "react";

import { SidebarNavListProps } from "./SidebarNavList.types";
import { sidebarNavList } from "./SidebarNavList.const";
import { SidebarNavItem } from "../SidebarNavItem/SidebarNavItem";

import { VStack } from "shared/ui/Stack";

export const SidebarNavList: FC<SidebarNavListProps> = memo((props) => {
    const { className } = props;

    return (
        <VStack
            Tag="nav"
            className={className}
            max
        >
            {sidebarNavList.map((params) => (
                <SidebarNavItem
                    key={params.id}
                    {...params}
                />
            ))}
        </VStack>
    );
});

