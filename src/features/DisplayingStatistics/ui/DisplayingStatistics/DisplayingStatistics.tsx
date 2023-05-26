import { FC, memo, useMemo } from "react";
import classNames from "classnames";

import cl from "./DisplayingStatistics.module.scss";
import { DisplayingStatisticsList, DisplayingStatisticsProps } from "./DisplayingStatistics.types";

import { TotalStatistics } from "entities/TotalStatistics";
import { HStack } from "shared/ui/Stack";

// !!! Hardcode
const currentValueNewCalls = 20;
const maxValueNewCalls = 30;

const currentValueQualityConversations = 40;
const maxvalueQualityConversations = 100;

const currentValueConversionOrder = 67;
const maxValueConversionOrder = 100;
// !!!

export const DisplayingStatistics: FC<DisplayingStatisticsProps> = memo((props) => {
    const { className, limitGreen = 66, limitRed = 33 } = props;

    const displayingStatisticsList: DisplayingStatisticsList[] = useMemo(
        () => [
            {
                id: 1,
                type: "newCalls",
                currentValue: currentValueNewCalls,
                maxValue: maxValueNewCalls,
                limitGreen,
                limitRed,
            },
            {
                id: 2,
                type: "qualityConversations",
                currentValue: currentValueQualityConversations,
                maxValue: maxvalueQualityConversations,
                limitGreen,
                limitRed,
            },
            {
                id: 3,
                type: "conversionOrder",
                currentValue: currentValueConversionOrder,
                maxValue: maxValueConversionOrder,
                limitGreen: 90,
                limitRed: 70,
            },
        ],
        [limitGreen, limitRed]
    );

    return (
        <HStack
            columnGap="56"
            className={classNames(cl.displaying_statistics, [className])}
        >
            {displayingStatisticsList.map((params) => (
                <TotalStatistics
                    key={params.id}
                    {...params}
                />
            ))}
        </HStack>
    );
});

