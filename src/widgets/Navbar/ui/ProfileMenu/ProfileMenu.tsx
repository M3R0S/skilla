import { FC, Fragment, memo } from "react";
import classNames from "classnames";
import { Menu } from "@headlessui/react";

import cl from "./ProfileMenu.module.scss";
import { ProfileMenuProps } from "./ProfileMenu.types";

import ProfileImg from "shared/assets/img/profile.png";
import MenuAvatarImg from "shared/assets/img/menu_avatar.png";
import { ReactComponent as LogoutSvg } from "shared/assets/svg/logout.svg";
import { ReactComponent as ArrowCloseSvg } from "shared/assets/svg/arrow_close12x7.svg";
import { ReactComponent as ArrowOpenSvg } from "shared/assets/svg/arrow_open12x7.svg";
import { ReactComponent as PhoneSvg } from "shared/assets/svg/phone-16x16.svg";
import { ReactComponent as MailSvg } from "shared/assets/svg/mail-16x16.svg";
import { Img } from "shared/ui/Img";
import { HStack, VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { Button } from "shared/ui/Button";

// !!! Hardcode
const operators = [
    {
        id: "1",
        img: MenuAvatarImg,
        name: "Мирон Батонов",
    },
    {
        id: "2",
        img: MenuAvatarImg,
        name: "Мирон Батонов",
    },
    {
        id: "3",
        img: MenuAvatarImg,
        name: "Мирон Батонов",
    },
];

const logist = [
    {
        id: "1",
        img: MenuAvatarImg,
        name: "Милана Константинопольская",
    },
    {
        id: "2",
        img: MenuAvatarImg,
        name: "Милана Константинопольская",
    },
    {
        id: "3",
        img: MenuAvatarImg,
        name: "Милана Константинопольская",
    },
];

const bookkeepers = [
    {
        id: "1",
        img: MenuAvatarImg,
        name: "Наталья Натальева",
    },
    {
        id: "2",
        img: MenuAvatarImg,
        name: "Наталья Натальева",
    },
    {
        id: "3",
        img: MenuAvatarImg,
        name: "Наталья Натальева",
    },
];

const personal = [
    {
        title: "Операторы",
        list: operators,
    },
    {
        title: "Логисты",
        list: logist,
    },
    {
        title: "Бухгалтеры",
        list: bookkeepers,
    },
];

export const ProfileMenu: FC<ProfileMenuProps> = memo((props) => {
    const { className } = props;

    return (
        <Menu
            as="div"
            className={classNames(cl.menu, [className])}
        >
            {({ open }) => (
                <>
                    <Menu.Button className={cl.btn}>
                        <Img
                            src={ProfileImg}
                            alt="Профиль"
                        />
                        {open ? (
                            <ArrowCloseSvg className={classNames(cl.arrow, cl.arrow_open)} />
                        ) : (
                            <ArrowOpenSvg className={classNames(cl.arrow, cl.arrow_close)} />
                        )}
                    </Menu.Button>
                    <Menu.Items className={cl.list}>
                        <VStack
                            className={cl.header}
                            rowGap="20"
                        >
                            <VStack rowGap="6">
                                <HStack justifyContent="space_between">
                                    <Text
                                        Tag="h1"
                                        size="18"
                                        theme="black"
                                    >
                                        Укропов Кирилл
                                    </Text>
                                    <LogoutSvg className={cl.logout} />
                                </HStack>
                                <HStack columnGap="20">
                                    <Text
                                        Tag="h2"
                                        className={cl.text_post}
                                        size="15"
                                        theme="secondary"
                                    >
                                        Директор
                                    </Text>
                                    <Text
                                        Tag="h2"
                                        size="15"
                                        theme="secondary"
                                    >
                                        Санкт-Петербург
                                    </Text>
                                </HStack>
                            </VStack>
                            <VStack rowGap="8">
                                <HStack
                                    columnGap="10"
                                    alignItems="center"
                                >
                                    <PhoneSvg />
                                    <Text
                                        Tag="p"
                                        theme="secondary"
                                        size="15"
                                    >
                                        8 (800) 333-17-21
                                    </Text>
                                </HStack>
                                <HStack
                                    columnGap="10"
                                    alignItems="center"
                                >
                                    <MailSvg />
                                    <Text
                                        Tag="p"
                                        theme="secondary"
                                        size="15"
                                    >
                                        hi@skilla.ru
                                    </Text>
                                </HStack>
                            </VStack>
                        </VStack>
                        <div className={cl.br} />
                        <VStack rowGap="24">
                            {personal.map(({ list, title }, index) => (
                                <VStack
                                    rowGap="8"
                                    key={index}
                                >
                                    <Text
                                        className={cl.title}
                                        Tag="h2"
                                        theme="secondary"
                                        size="15"
                                    >
                                        {title}
                                    </Text>
                                    <VStack>
                                        {list.map((operator) => {
                                            return (
                                                <Menu.Item
                                                    as={Fragment}
                                                    key={operator.id}
                                                >
                                                    {({ active }) => (
                                                        <Button
                                                            justifyContent="start"
                                                            className={classNames(cl.item, {
                                                                [cl.active]: active,
                                                            })}
                                                        >
                                                            <Img
                                                                src={operator.img}
                                                                alt={operator.name}
                                                            />
                                                            <Text
                                                                theme="blue"
                                                                size="15"
                                                                Tag="h3"
                                                            >
                                                                {operator.name}
                                                            </Text>
                                                        </Button>
                                                    )}
                                                </Menu.Item>
                                            );
                                        })}
                                    </VStack>
                                </VStack>
                            ))}
                        </VStack>
                    </Menu.Items>
                </>
            )}
        </Menu>
    );
});

