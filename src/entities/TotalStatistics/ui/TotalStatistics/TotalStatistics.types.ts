export interface TotalStatisticsProps {
    className?: string;
    currentValue: number;
    maxValue: number;
    limitRed: number;
    limitGreen: number;
    type: DisplayingStatisticsItems
}

export type DisplayingStatisticsItems = "newCalls" | "qualityConversations" | "conversionOrder";