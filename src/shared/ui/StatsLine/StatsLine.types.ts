export interface StatsLineProps {
    className?: string;
    procentValue: number;
    background: keyof typeof BackgroundColor;
}

export const BackgroundColor = {
    green: "#00a775",
    yellow: "#ffd500",
    red: "#EA1A4F",
} as const;

export type BackgroundColor = ValueOf<typeof BackgroundColor>;

