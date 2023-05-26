import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./ControlCalls.module.scss";
import { ControlCallsProps } from "./ControlCalls.types";

import { FilteringCalls } from "features/FilteringCalls";
import { GetBalance } from "features/GetBalance";
import { HStack, VStack } from "shared/ui/Stack";

export const ControlCalls: FC<ControlCallsProps> = memo((props) => {
    const { className } = props;

    return (
        <VStack
            gap="32"
            className={classNames(cl.control_calls, [className])}
        >
            <HStack
                gap="46"
                justifyContent="end"
            >
                <GetBalance />
                <FilteringCalls.Day />
            </HStack>
            <FilteringCalls />
        </VStack>
    );
});

