import { DisplayingStatisticsItems } from "entities/TotalStatistics";

export interface DisplayingStatisticsProps {
    className?: string;
    limitGreen?: number;
    limitRed?: number;
}

export interface DisplayingStatisticsList {
    id: number;
    type: DisplayingStatisticsItems;
    currentValue: number;
    maxValue: number;
    limitRed: number;
    limitGreen: number;
}

