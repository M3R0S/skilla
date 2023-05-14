import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.types";

import { DisplayingStatistics } from "features/DisplayingStatistics";
import { DateNow } from "entities/DateNow";
import { HStack } from "shared/ui/Stack";

export const Navbar: FC<NavbarProps> = memo((props) => {
    const { className } = props;

    return (
        <HStack className={classNames(cl.navbar, [className])}>
            <HStack columnGap="86">
                <DateNow />
                <DisplayingStatistics />
            </HStack>
        </HStack>
    );
});

