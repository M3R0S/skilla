import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./DateNow.module.scss";
import { DateNowProps } from "./DateNow.types";

import { Text } from "shared/ui/Text";

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const mounths = ["Янв", "Фев", "Мар", "Апр", "Мая", "Июн", "Июл", "Авг", "Сен", "Окт", "Дек"];

export const DateNow: FC<DateNowProps> = memo((props) => {
    const { className } = props;

    const date = new Date();

    const dayNow = days[date.getDay()];
    const dateNow = date.getDate();
    const mounthNow = mounths[date.getMonth()];

    return (
        <Text
            Tag="h1"
            theme="header"
            className={classNames(cl.date_now, [className])}
        >
            {`${dayNow}, ${dateNow} ${mounthNow}`}
        </Text>
    );
});

