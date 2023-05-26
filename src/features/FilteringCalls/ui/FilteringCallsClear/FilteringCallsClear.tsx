import { FC, memo, useCallback } from "react";
import classNames from "classnames";

import cl from "./FilteringCallsClear.module.scss";
import { FilteringCallsClearProps } from "./FilteringCallsClear.types";
import { filteringCallsActions } from "../../model/slice/filteringCallsSlice";

import { ReactComponent as CloseSvg } from "shared/assets/svg/call/close.svg";
import { useAppDispatch } from "shared/lib/hooks/useStore";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";

export const FilteringCallsClear: FC<FilteringCallsClearProps> = memo((props) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const onClick = useCallback(() => {
        dispatch(filteringCallsActions.setCalls(""));
        dispatch(filteringCallsActions.setErrors(""));
        dispatch(filteringCallsActions.setEstimations(""));
        dispatch(filteringCallsActions.setInOut(""));
        dispatch(filteringCallsActions.setLimit(""));
        dispatch(filteringCallsActions.setPersons(""));
        dispatch(filteringCallsActions.setSources(""));
    }, [dispatch]);

    return (
        <Button
            onClick={onClick}
            theme="without_filling"
            className={classNames(cl.filtering_calls_clear, [className])}
        >
            <Text
                className={cl.text}
                theme="secondary"
                size="14"
            >
                Сбросить фильтры
            </Text>
            <CloseSvg
                width={15}
                className={cl.close}
            />
        </Button>
    );
});

