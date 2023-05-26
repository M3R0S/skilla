import { ChangeEvent, FC, memo, useState, useCallback } from "react";
import classNames from "classnames";

import cl from "./FilteringCallsSearch.module.scss";
import { FilteringCallsSearchProps } from "./FilteringCallsSearch.types";
import { getFilteringCallsSearch } from "../../model/selectors/getFilteringCalls";
import { filteringCallsActions } from "../../model/slice/filteringCallsSlice";

import { ReactComponent as SearchSvg } from "shared/assets/svg/call/Search.svg";
import { ReactComponent as CloseSvg } from "shared/assets/svg/call/close.svg";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { HStack } from "shared/ui/Stack";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";

export const FilteringCallsSearch: FC<FilteringCallsSearchProps> = memo((props) => {
    const { className } = props;

    const [focus, setFocus] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const search = useAppSelector(getFilteringCallsSearch);

    const onChangeHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(filteringCallsActions.setSearch(e.target.value));
        },
        [dispatch]
    );

    const onClickHandler = useCallback(() => {
        dispatch(filteringCallsActions.setSearch(""));
    }, [dispatch]);

    return (
        <HStack
            gap="12"
            className={classNames(cl.filtering_calls_search, className, { [cl.focus]: focus })}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
        >
            <Button>
                <SearchSvg className={cl.svg} />
            </Button>
            <Input
                value={search}
                className={cl.input}
                type="text"
                placeholder="Поиск по звонкам"
                onChange={onChangeHandler}
            />
            <Button onClick={onClickHandler}>
                <CloseSvg className={cl.close} />
            </Button>
        </HStack>
    );
});

