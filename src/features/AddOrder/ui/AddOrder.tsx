import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./AddOrder.module.scss";
import { AddOrderProps } from "./AddOrder.types";

import { ReactComponent as AddOrderSvg } from "shared/assets/svg/sidebar/Vector.svg";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";

export const AddOrder: FC<AddOrderProps> = memo((props) => {
    const { className } = props;

    return (
        <Button
            justifyContent="start"
            theme="primary"
            size="16_icon"
            className={classNames(cl.add_order, [className])}
        >
            <Text
                size="16"
                theme="white"
                className={cl.text}
            >
                Добавить заказ
            </Text>
            <AddOrderSvg className={cl.icon} />
        </Button>
    );
});

