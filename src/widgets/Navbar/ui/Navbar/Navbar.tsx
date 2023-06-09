import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";

import { DisplayingStatistics } from "features/DisplayingStatistics";
import { ChangeOrganization } from "features/ChangeOrganization";
import { GlobalSearch } from "features/GlobalSearch";
import { DateNow } from "entities/DateNow";
import { HStack } from "shared/ui/Stack";

export const Navbar: FC<NavbarProps> = memo((props) => {
    const { className, page } = props;

    return (
        <HStack className={classNames(cl.navbar, className)}>
            <HStack columnGap="86">
                <DateNow />
                {page === "calls" && <DisplayingStatistics />}
            </HStack>
            <HStack
                grow="1"
                justifyContent="end"
                columnGap="64"
            >
                <GlobalSearch />
                <HStack columnGap="46">
                    <ChangeOrganization />
                    <ProfileMenu />
                </HStack>
            </HStack>
        </HStack>
    );
});

