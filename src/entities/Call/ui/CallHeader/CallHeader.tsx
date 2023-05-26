import { memo } from "react";
import classNames from "classnames";

import cl from "./CallHeader.module.scss";
import { CallHeaderProps } from "./CallHeader.types";

import { Text } from "shared/ui/Text";

const headertList = [
    {
        id: 1,
        title: "Тип",
    },
    {
        id: 2,
        title: "Время",
    },
    {
        id: 3,
        title: "Сотрудник",
    },
    {
        id: 4,
        title: "Звонок",
    },
    {
        id: 5,
        title: "Источник",
    },
    {
        id: 6,
        title: "Оценка",
    },
    {
        id: 7,
        title: "Длительность",
    },
];

export const CallHeader = memo((props: CallHeaderProps) => {
    const { className, date } = props;

    return (
        <div className={classNames(cl.header, className, { [cl.title]: !date, [cl.main]: date })}>
            {date ? (
                <Text
                    theme="black"
                    size="15"
                >
                    {date}
                </Text>
            ) : (
                headertList.map(({ id, title }) => (
                    <Text
                        key={id}
                        Tag="h2"
                        theme="header"
                        size="14"
                    >
                        {title}
                    </Text>
                ))
            )}
        </div>
    );
});

