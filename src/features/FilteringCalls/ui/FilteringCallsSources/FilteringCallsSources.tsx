import { FC, memo, useCallback } from "react";

import { FilteringCallsSourcesProps } from "./FilteringCallsSources.types";
import { getFilteringCallsSources } from "../../model/selectors/getFilteringCalls";
import { filteringCallsActions } from "../../model/slice/filteringCallsSlice";

import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { ListBox, ListBoxOption } from "shared/ui/ListBox";

const options: ListBoxOption[] = [
    {
        value: "",
        content: "Все источники",
    },
    {
        value: "from_site",
        content: "С сайта",
    },
    {
        value: "yandex",
        content: "Из Yandex",
    },
    {
        value: "google",
        content: "Из Google",
    },
    {
        value: "empty",
        content: "Остальные источники",
    },
];

export const FilteringCallsSources: FC<FilteringCallsSourcesProps> = memo((props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const sources = useAppSelector(getFilteringCallsSources);

    const onChangeValue = useCallback(
        (sources: string) => {
            dispatch(filteringCallsActions.setSources(sources));
        },
        [dispatch]
    );

    return (
        <ListBox
            onChangeValue={onChangeValue}
            value={sources}
            options={options}
            defaultValue="Все источники"
            className={className}
            theme="filter"
        />
    );
});

