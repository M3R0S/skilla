import { FC, memo, useCallback } from "react";

import { FilteringCallsErrorProps } from "./FilteringCallsError.types";
import { getFilteringCallsErrors } from "../../model/selectors/getFilteringCalls";
import { filteringCallsActions } from "../../model/slice/filteringCallsSlice";
import { FilteringErrors } from "../../model/types/filteringCallsState";

import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { ListBox, ListBoxOption } from "shared/ui/ListBox";

const options: ListBoxOption<FilteringErrors>[] = [
    {
        value: "",
        content: "Все ошибки",
    },
    {
        value: "1",
        content: "Приветствие",
    },
    {
        value: "2",
        content: "Имя",
    },
    {
        value: "3",
        content: "Цена",
    },
    {
        value: "4",
        content: "Скидка",
    },
    {
        value: "5",
        content: "Предзаказ",
    },
    {
        value: "6",
        content: "Благодарность",
    },
    {
        value: "7",
        content: "Стоп слово",
    },
];

export const FilteringCallsError: FC<FilteringCallsErrorProps> = memo((props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const errors = useAppSelector(getFilteringCallsErrors);

    const onChangeValue = useCallback(
        (errors: FilteringErrors) => {
            dispatch(filteringCallsActions.setErrors(errors));
        },
        [dispatch]
    );

    return (
        <ListBox
            onChangeValue={onChangeValue}
            value={errors}
            options={options}
            defaultValue="Все ошибки"
            className={className}
            theme="filter"
        />
    );
});

