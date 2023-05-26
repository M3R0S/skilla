import { ChangeEvent, FC, memo, useState, useCallback, Fragment, useEffect } from "react";
import classNames from "classnames";
import { Listbox } from "@headlessui/react";

import cl from "./FilteringCallsDay.module.scss";
import { FilteringCallsDayProps } from "./FilteringCallsDay.types";
import {
    getFilteringCallsDateEnd,
    getFilteringCallsDateStart,
} from "../../model/selectors/getFilteringCalls";
import { filteringCallsActions } from "../../model/slice/filteringCallsSlice";

import { ReactComponent as CalendarSvg } from "shared/assets/svg/call/icon-calendar.svg";
import { ReactComponent as ArrowLeftSvg } from "shared/assets/svg/call/arrow-left.svg";
import { ReactComponent as ArrowRightSvg } from "shared/assets/svg/call/arrow-right.svg";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { dateNow } from "shared/lib/helpers/dateNow";
import { Button } from "shared/ui/Button";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { Input } from "shared/ui/Input";

const items = [
    {
        title: "3 дня",
        value: 3,
    },
    {
        title: "Неделя",
        value: 7,
    },
    {
        title: "Месяц",
        value: 30,
    },
    {
        title: "Год",
        value: 365,
    },
];

function getInfo(value: number) {
    if (value === 1) {
        return "1 день";
    }

    if (value > 1 && value < 5) {
        return `${value} дня`;
    }

    return `${value} дней`;
}

const today = new Date();
const date = dateNow(today);

function getDate(value: number) {
    const dateOffset = 24 * 60 * 60 * 1000 * value;
    const myDate = new Date();
    myDate.setTime(myDate.getTime() - dateOffset);

    return {
        date: myDate.getDate(),
        mounth: myDate.getMonth(),
        years: myDate.getFullYear(),
    };
}

function getDateInfo(date: string) {
    const dateDay = Number(date.substring(8, 10));
    const dateMounth = Number(date.substring(5, 7));
    const dateYears = Number(date.substring(0, 4));

    const MyDate = new Date();
    MyDate.setDate(dateDay);
    MyDate.setMonth(dateMounth);
    MyDate.setFullYear(dateYears);

    return {
        time: MyDate.getTime(),
    };
}

function differenceDate(dateStart: string, dateEnd: string) {
    const diff = getDateInfo(dateEnd).time - getDateInfo(dateStart).time;
    const MyDate = new Date();
    MyDate.setTime(diff);

    return MyDate.getTime() / 1000 / 60 / 60 / 24;
}

function normalizeDate(value: number) {
    const { date, mounth, years } = getDate(value);
    const actualMounth = mounth + 1;

    return `${years}-${actualMounth < 10 ? "0" + actualMounth : actualMounth}-${
        date < 10 ? "0" + date : date
    }`;
}

export const FilteringCallsDay: FC<FilteringCallsDayProps> = memo((props) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const dateStart = useAppSelector(getFilteringCallsDateStart);
    const dateEnd = useAppSelector(getFilteringCallsDateEnd);

    const [value, setValue] = useState<number>(3);

    const onChangeValue = (value: number) => {
        setValue(value);
        dispatch(filteringCallsActions.setDateStart(normalizeDate(value)));
        dispatch(filteringCallsActions.setDateEnd(date));
    };

    const increment = () => {
        setValue((value) => value + 1);
        dispatch(filteringCallsActions.setDateStart(normalizeDate(value + 1)));
        dispatch(filteringCallsActions.setDateEnd(date));
    };

    const decrement = () => {
        setValue((value) => value - 1);
        dispatch(filteringCallsActions.setDateStart(normalizeDate(value - 1)));
        dispatch(filteringCallsActions.setDateEnd(date));
    };

    const onChangeDateStart = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(filteringCallsActions.setDateStart(e.target.value));
            setValue(Math.round(differenceDate(e.target.value, dateEnd)));
        },
        [dateEnd, dispatch]
    );

    const onChangeDateEnd = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(filteringCallsActions.setDateEnd(e.target.value));
            setValue(Math.round(differenceDate(dateStart, e.target.value)));
        },
        [dateStart, dispatch]
    );

    useEffect(() => {
        dispatch(filteringCallsActions.setDateStart(normalizeDate(items[0].value)));
        dispatch(filteringCallsActions.setDateEnd(date));
    }, [dispatch]);

    return (
        <div className={classNames(cl.filtering_calls_day, [className])}>
            <Listbox
                value={value}
                onChange={onChangeValue}
                as="div"
                className={cl.listbox}
            >
                <HStack gap="20">
                    <Button
                        disabled={value === 1}
                        onClick={decrement}
                    >
                        <ArrowLeftSvg className={cl.svg} />
                    </Button>
                    <Listbox.Button className={cl.btn}>
                        <CalendarSvg className={cl.btn_svg} />
                        <p>{getInfo(value)}</p>
                    </Listbox.Button>
                    <Button onClick={increment}>
                        <ArrowRightSvg className={cl.svg} />
                    </Button>
                </HStack>
                <Listbox.Options className={cl.options}>
                    {items.map((item) => (
                        <Listbox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cl.option, {
                                        [cl.active]: active,
                                        [cl.selected]: selected,
                                    })}
                                >
                                    {item.title}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                    <Listbox.Option
                        value={value}
                        disabled
                        as={Fragment}
                    >
                        <li className={cl.option_date}>
                            <Text
                                theme="black"
                                size="14"
                            >
                                Указать даты
                            </Text>
                        </li>
                    </Listbox.Option>
                    <HStack
                        className={cl.dates}
                        justifyContent="space_between"
                    >
                        <Input
                            type="date"
                            className={cl.date}
                            value={dateStart}
                            onChange={onChangeDateStart}
                        />
                        <Text
                            size="14"
                            theme="header"
                        >
                            {" - "}
                        </Text>
                        <Input
                            type="date"
                            className={cl.date}
                            value={dateEnd}
                            onChange={onChangeDateEnd}
                        />
                    </HStack>
                </Listbox.Options>
            </Listbox>
        </div>
    );
});

