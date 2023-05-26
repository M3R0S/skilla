export function dateNow (date: Date) {
    const dateNow = `${date.getFullYear()}-${
        date.getMonth() < 10 ? "0" + (Number(date.getMonth()) + 1) : Number(date.getMonth()) + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;

    return dateNow
}