export const Estimation = {
    great: "Отлично",
    well: "Хорошо",
    bad: "Плохо",
} as const;

export type Estimation = ValueOf<typeof Estimation>;

