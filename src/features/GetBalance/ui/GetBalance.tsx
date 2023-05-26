import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./GetBalance.module.scss";
import { GetBalanceProps } from "./GetBalance.types";

import { ReactComponent as PlusSvg } from "shared/assets/svg/Plus.svg";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";

//!!! Hardcode
const balance = "272 ₽";

export const GetBalance: FC<GetBalanceProps> = memo((props) => {
    const { className } = props;

    return (
        <Button
            theme="white_oval"
            className={classNames(cl.get_balance, [className])}
        >
            <Text
                theme="header"
                size="14"
                Tag="h2"
            >
                {"Баланс: "}
                <Text
                    className={cl.money}
                    theme="black"
                    size="14_500"
                >
                    {balance}
                </Text>
            </Text>
            <PlusSvg className={cl.svg} />
        </Button>
    );
});

