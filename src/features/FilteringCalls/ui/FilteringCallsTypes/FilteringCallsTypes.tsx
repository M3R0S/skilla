import { FC, memo, useCallback } from "react";

import { FilteringCallsTypesProps } from "./FilteringCallsTypes.types";
import { getFilteringCallsInOut } from "../../model/selectors/getFilteringCalls";
import { filteringCallsActions } from "../../model/slice/filteringCallsSlice";

import { ReactComponent as IncomingSvg } from "shared/assets/svg/call/incoming_arrow.svg";
import { ReactComponent as OutgoingSvg } from "shared/assets/svg/call/outgoing_arrow.svg";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { ListBox } from "shared/ui/ListBox";
import { HStack } from "shared/ui/Stack";

const typesList = [
    {
        value: "",
        content: "Все типы",
    },
    {
        value: "1",
        content: (
            <HStack gap="8">
                <IncomingSvg fill="#002CFB" />
                {"Входящие"}
            </HStack>
        ),
        title: "Входящие",
    },
    {
        value: "0",
        content: (
            <HStack gap="8">
                <OutgoingSvg fill="#28A879" />
                {"Исходящие"}
            </HStack>
        ),
        title: "Исходящие",
    },
];

export const FilteringCallsTypes: FC<FilteringCallsTypesProps> = memo((props) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const inOut = useAppSelector(getFilteringCallsInOut);

    const onChangeValue = useCallback(
        (value: string) => {
            dispatch(filteringCallsActions.setInOut(value));
        },
        [dispatch]
    );

    return (
        <ListBox
            theme="filter"
            options={typesList}
            defaultValue="Все типы"
            value={inOut}
            onChangeValue={onChangeValue}
            className={className}
        />
    );
});

