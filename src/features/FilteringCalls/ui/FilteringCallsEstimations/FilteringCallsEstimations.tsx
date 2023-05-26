import { FC, memo, useCallback } from "react";

import { FilteringCallsEstimationsProps } from "./FilteringCallsEstimations.types";
import { getFilteringCallsEstimation } from "../../model/selectors/getFilteringCalls";
import { filteringCallsActions } from "../../model/slice/filteringCallsSlice";

import { Estimation } from "entities/Estimation";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { ListBox, ListBoxOption } from "shared/ui/ListBox";

const options: ListBoxOption[] = [
    {
        value: "",
        content: "Все оценки",
    },
    {
        value: "1",
        content: "Распознать",
    },
    {
        value: "noscript",
        content: "Скрипт не использован",
    },
    {
        value: "",
        content: <Estimation estimation="bad" />,
    },
    {
        value: "",
        content: <Estimation estimation="great" />,
    },
    {
        value: "",
        content: <Estimation estimation="well" />,
    },
];

export const FilteringCallsEstimations: FC<FilteringCallsEstimationsProps> = memo((props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const estimations = useAppSelector(getFilteringCallsEstimation);

    const onChangeValue = useCallback(
        (estimations: string) => {
            dispatch(filteringCallsActions.setEstimations(estimations));
        },
        [dispatch]
    );

    return (
        <ListBox
            onChangeValue={onChangeValue}
            value={estimations}
            options={options}
            defaultValue="Все оценки"
            className={className}
            theme="filter"
        />
    );
});

