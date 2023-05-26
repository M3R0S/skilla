import { FC, memo, useCallback } from "react";

import { FilteringCallsCallsProps } from "./FilteringCallsCalls.types";
import { getFilteringCallsCalls } from "../../model/selectors/getFilteringCalls";
import { filteringCallsActions } from "../../model/slice/filteringCallsSlice";

import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { ListBox, ListBoxOption } from "shared/ui/ListBox";

const options: ListBoxOption[] = [
    {
        value: "",
        content: "Все звонки",
    },
    {
        value: "clients",
        content: "Все клиенты",
    },
    {
        value: "new_clients",
        content: "Новые клиенты",
    },
    {
        value: "workers",
        content: "Все исполнители",
    },
    {
        value: "app",
        content: "Через приложение",
    },
    {
        value: "1",
        content: "Прочие звонки",
    },
];

export const FilteringCallsCalls: FC<FilteringCallsCallsProps> = memo((props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const calls = useAppSelector(getFilteringCallsCalls);

    const onChangeValue = useCallback(
        (calls: string) => {
            dispatch(filteringCallsActions.setCalls(calls));
        },
        [dispatch]
    );

    return (
        <ListBox
            onChangeValue={onChangeValue}
            value={calls}
            options={options}
            defaultValue="Все звноки"
            className={className}
            theme="filter"
        />
    );
});

