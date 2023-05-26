import { FC, memo, useCallback } from "react";

import { FilteringCallsStaffProps } from "./FilteringCallsStaff.types";
import { getFilteringCallsPersons } from "../../model/selectors/getFilteringCalls";
import { filteringCallsActions } from "../../model/slice/filteringCallsSlice";

import Avatar from "shared/assets/img/menu_avatar.png";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { ListBox, ListBoxOption } from "shared/ui/ListBox";
import { Img } from "shared/ui/Img";
import { HStack } from "shared/ui/Stack";

// !!! Hardcode
const options: ListBoxOption[] = [
    {
        value: "",
        content: "Все сотрудники",
    },
    {
        value: "4730",
        content: (
            <HStack gap="8">
                <Img
                    src={Avatar}
                    alt={"Изображение профиля"}
                />
                {"Зинаида Петровна"}
            </HStack>
        ),
        title: "Зинаида Петровна",
    },
    {
        value: "2731",
        content: (
            <HStack gap="8">
                <Img
                    src={Avatar}
                    alt={"Изображение профиля"}
                />
                {"Игорь Константинович"}
            </HStack>
        ),
        title: "Игорь Константинович",
    },
];
//!!

export const FilteringCallsStaff: FC<FilteringCallsStaffProps> = memo((props) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const persons = useAppSelector(getFilteringCallsPersons);
    // const staff = useAppSelector(getCallsPersons);

    // const options: ListBoxOption[] = staff.map((pers) => ({
    //     value: String(pers.id),
    //     content: (
    //         <HStack gap="8">
    //             <Img
    //                 src={pers.avatar}
    //                 alt={pers.name}
    //             />
    //             {pers.name}
    //         </HStack>
    //     ),
    //     title: pers.name,
    // }));

    // options.unshift({
    //     value: "",
    //     content: <>{"Все сотрудники"}</>,
    // });

    const onChangeValue = useCallback(
        (value: string) => {
            dispatch(filteringCallsActions.setPersons(value));
        },
        [dispatch]
    );

    return (
        <ListBox
            theme="filter"
            options={options}
            defaultValue={"Все сотрудники"}
            value={persons}
            onChangeValue={onChangeValue}
            className={className}
        />
    );
});

