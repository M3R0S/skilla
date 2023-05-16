import { FC, memo, useCallback } from "react";
import classNames from "classnames";

import cl from "./ChangeOrganization.module.scss";
import { ChangeOrganizationProps } from "./ChangeOrganization.types";
import { organizationActions } from "../../model/slice/organizationSlice";
import { getOrganizationValue } from "../../model/selectors/getOrganizationValue";

import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { ListBox, ListBoxOption } from "shared/ui/ListBox";

export const ChangeOrganization: FC<ChangeOrganizationProps> = memo((props) => {
    const { className } = props;

    // !!! Hardcode
    const options: ListBoxOption[] = [
        {
            value: "ООО Сидорова Александра Михайловна",
            content: "ООО Сидорова Александра Михайловна",
        },
        {
            value: "ИП Сидорова Александра Михайловна",
            content: "ИП Сидорова Александра Михайловна",
        },
        {
            value: "Все организации",
            content: "Все организации",
        },
    ];
    // !!!

    const value = useAppSelector(getOrganizationValue);
    const dispatch = useAppDispatch();

    const onChangeValue = useCallback(
        (value: string) => {
            dispatch(organizationActions.changeValue(value));
        },
        [dispatch]
    );

    return (
        <ListBox
            theme="organization"
            options={options}
            onChangeValue={onChangeValue}
            defaultValue={value}
            value={value}
            className={classNames(cl.change_organization, [className])}
        />
    );
});

