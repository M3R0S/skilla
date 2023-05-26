import { FC, memo, useEffect, useState } from "react";
import classNames from "classnames";

import cl from "./FilteringCalls.module.scss";
import { getFilteringCalls } from "../../model/selectors/getFilteringCalls";
import { FilteringCallsProps } from "./FilteringCalls.types";
import { FilteringCallsDay } from "../FilteringCallsDay/FilteringCallsDay";
import { FilteringCallsSearch } from "../FilteringCallsSearch/FilteringCallsSearch";
import { FilteringCallsTypes } from "../FilteringCallsTypes/FilteringCallsTypes";
import { FilteringCallsStaff } from "../FilteringCallsStaff/FilteringCallsStaff";
import { FilteringCallsCalls } from "../FilteringCallsCalls/FilteringCallsCalls";
import { FilteringCallsError } from "../FilteringCallsError/FilteringCallsError";
import { FilteringCallsSources } from "../FilteringCallsSources/FilteringCallsSources";
import { FilteringCallsEstimations } from "../FilteringCallsEstimations/FilteringCallsEstimations";
import { FilteringCallsClear } from "../FilteringCallsClear/FilteringCallsClear";

import { useAppSelector } from "shared/lib/hooks/useStore";
import { HStack } from "shared/ui/Stack";

const FilteringCallsMain: FC<FilteringCallsProps> = memo((props) => {
    const { className } = props;
    const [isClear, setIsClear] = useState<boolean>(false);

    const filteringCalls = useAppSelector(getFilteringCalls);

    useEffect(() => {
        if (
            filteringCalls.calls !== "" ||
            filteringCalls.errors !== "" ||
            filteringCalls.estimations !== "" ||
            filteringCalls.inOut !== "" ||
            filteringCalls.persons !== "" ||
            filteringCalls.sources !== ""
        ) {
            setIsClear(true);
        } else {
            setIsClear(false);
        }
    }, [
        filteringCalls.calls,
        filteringCalls.errors,
        filteringCalls.estimations,
        filteringCalls.inOut,
        filteringCalls.persons,
        filteringCalls.sources,
    ]);

    return (
        <HStack
            justifyContent="space_between"
            className={classNames(cl.filtering_calls, [className])}
        >
            <FilteringCallsSearch />
            <HStack
                gap="32"
                className={cl.filters}
            >
                {isClear && <FilteringCallsClear />}
                <FilteringCallsTypes />
                <FilteringCallsStaff />
                <FilteringCallsCalls />
                <FilteringCallsSources />
                <FilteringCallsEstimations />
                <FilteringCallsError />
            </HStack>
        </HStack>
    );
});

export const FilteringCalls = Object.assign(FilteringCallsMain, { Day: FilteringCallsDay });

