import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Payment.module.scss";
import { PaymentProps } from "./Payment.types";

import { ReactComponent as PaymentSvg } from "shared/assets/svg/sidebar/alert_24.svg";
import { Button } from "shared/ui/Button";
import { Text } from "shared/ui/Text";

export const Payment: FC<PaymentProps> = memo((props) => {
    const { className } = props;

    return (
        <Button
            theme="primary"
            size="16_icon"
            justifyContent="start"
            className={classNames(cl.payment, [className])}
        >
            <Text
                className={cl.text}
                theme="white"
                size="16"
            >
                Оплата
            </Text>
            <PaymentSvg className={cl.icon} />
        </Button>
    );
});

