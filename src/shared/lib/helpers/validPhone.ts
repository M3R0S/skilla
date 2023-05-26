export const validPhone = (number: string) => {
    const plusGroup = "+" + number.slice(0, 1);
    const codeGroup = number.slice(1, 4);
    const firstGroup = number.slice(4, 7);
    const secondGroup = number.slice(7, 9);
    const thirdGroup = "**";

    const correctPhone =
        plusGroup + "(" + codeGroup + ")" + firstGroup + "-" + secondGroup + "-" + thirdGroup;

    return correctPhone;
};