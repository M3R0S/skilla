/* eslint-disable no-constant-condition */
import { FC, memo, useMemo, useState } from "react";
import classNames from "classnames";

import cl from "./Call.module.scss";
import { CallProps } from "./Call.types";
import { CallHeader } from "../CallHeader/CallHeader";

import { Estimation } from "entities/Estimation";
import { ReactComponent as WebSvg } from "shared/assets/svg/call/web.svg";
import { ReactComponent as IncomingArrowSvg } from "shared/assets/svg/call/incoming_arrow.svg";
import { ReactComponent as OutgoingArrowSvg } from "shared/assets/svg/call/outgoing_arrow.svg";
import { ReactComponent as PhoneSvg } from "shared/assets/svg/call/phone.svg";
import { validPhone } from "shared/lib/helpers/validPhone";
import { normalizeTime } from "shared/lib/helpers/normalizeTime";
import { HStack, VStack } from "shared/ui/Stack";
import { Img } from "shared/ui/Img";
import { Text } from "shared/ui/Text";
import { Button } from "shared/ui/Button";
import { Player } from "shared/ui/Player";

export const CallMain: FC<CallProps> = memo((props) => {
    const { className, call } = props;
    const [isHover, setIsHover] = useState<boolean>(false);

    // !!! Hardcode
    const isListeden = useMemo(() => Boolean(Math.round(Math.random())), []);
    const estimation = useMemo(() => Math.round(Math.random() * 3), []);
    // !!!

    const onMouseEnter = () => {
        setIsHover(true);
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={classNames(cl.call, [className])}
        >
            <div className={cl.in_out}>
                {call.in_out ? (
                    <OutgoingArrowSvg
                        className={classNames(cl.outgoing, {
                            [cl.rejected]: call.status === "Не дозвонился",
                        })}
                    />
                ) : (
                    <IncomingArrowSvg
                        className={classNames(cl.incoming, {
                            [cl.rejected]: call.status === "Не дозвонился",
                        })}
                    />
                )}
            </div>
            <div className={cl.date_time}>
                <Text
                    Tag="p"
                    theme="black"
                    size="15"
                >
                    {call.date.slice(11, 16)}
                </Text>
            </div>
            <HStack
                gap="44"
                className={cl.worker}
            >
                <Img
                    width={32}
                    height={32}
                    src={call.person_avatar}
                    alt={call.person_name}
                />
                <HStack
                    className={cl.icons}
                    gap="10"
                >
                    {call.from_site ? <WebSvg /> : <div className={cl.web_plug} />}
                    {isListeden ? <PhoneSvg /> : <div className={cl.web_plug} />}
                </HStack>
            </HStack>
            <VStack
                gap="6"
                className={cl.contact}
            >
                {call.contact_name && (
                    <Text
                        Tag="p"
                        theme="black"
                        size="15"
                    >
                        {call.contact_name}
                    </Text>
                )}
                {call.contact_company && (
                    <Text
                        Tag="p"
                        theme={call.contact_name ? "secondary" : "black"}
                        size="15"
                    >
                        {call.contact_company}
                    </Text>
                )}
                <Text
                    Tag="p"
                    theme={call.contact_name || call.contact_company ? "secondary" : "black"}
                    size="15"
                >
                    {call.in_out ? validPhone(call.from_number) : validPhone(call.to_number)}
                </Text>
            </VStack>
            <div className={cl.source}>
                <Text
                    Tag="p"
                    theme="secondary"
                    size="15"
                >
                    {call.source}
                </Text>
            </div>
            <HStack className={cl.estimation}>
                {call.errors.includes("Скрипт не использован") && (
                    <Text
                        Tag="p"
                        theme="red"
                        size="14"
                    >
                        Скрипт не использован
                    </Text>
                )}
                {!call.errors[0] && estimation === 0 && (
                    <Button
                        theme="secondary"
                        size="14"
                    >
                        Распознать
                    </Button>
                )}
                {!call.errors[0] && estimation === 1 && <Estimation estimation="great" />}
                {!call.errors[0] && estimation === 2 && <Estimation estimation="well" />}
                {!call.errors[0] && estimation === 3 && <Estimation estimation="bad" />}
            </HStack>
            <HStack
                justifyContent="end"
                grow="1"
            >
                {isHover ? (
                    <Player
                        className={isHover ? undefined : cl.none_player}
                        duration={call.time}
                    />
                ) : (
                    <Text
                        Tag="p"
                        theme="black"
                        size="14"
                    >
                        {normalizeTime(call.time)}
                    </Text>
                )}
            </HStack>
        </div>
    );
});

export const Call = Object.assign(CallMain, { Header: CallHeader });

