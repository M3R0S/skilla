import { FC, memo } from "react";

import { TotalStatisticsProps } from "./TotalStatistics.types";

import { VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { BackgroundColor, StatsLine } from "shared/ui/StatsLine";

export const TotalStatistics: FC<TotalStatisticsProps> = memo((props) => {
    const { className, maxValue, currentValue, limitGreen, limitRed, type } = props;

    const procentValue = (currentValue / maxValue) * 100;

    function setBackground() {
        const colors = Object.keys(BackgroundColor) as (keyof typeof BackgroundColor)[];
        if (procentValue <= limitRed) {
            return colors[2];
        }

        if (procentValue > limitRed && procentValue < limitGreen) {
            return colors[1];
        }

        if (procentValue >= limitGreen) {
            return colors[0];
        }

        return colors[2];
    }

    return (
        <VStack
            rowGap="7"
            className={className}
        >
            <Text.NotMemo
                Tag="h2"
                theme="black"
                size="14"
            >
                {type === "newCalls" && "Новые звонки "}
                {type === "qualityConversations" && "Качество разговоров "}
                {type === "conversionOrder" && "Конверсия в заказ "}
                <Text.NotMemo
                    size="14"
                    theme={setBackground()}
                >
                    {type === "newCalls" && `${currentValue} из ${maxValue} шт`}
                    {type === "qualityConversations" && `${procentValue} %`}
                    {type === "conversionOrder" && `${procentValue} %`}
                </Text.NotMemo>
            </Text.NotMemo>
            <StatsLine
                procentValue={procentValue}
                background={setBackground()}
            />
        </VStack>
    );
});

