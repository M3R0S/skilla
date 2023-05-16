import { Fragment, memo } from "react";
import { Menu as HMenu } from "@headlessui/react";
import classNames from "classnames";

import cl from "./Menu.module.scss";
import { MenuProps } from "./Menu.types";
import { Button } from "../Button";

export const Menu = memo((props: MenuProps) => {
    const { className, items, trigger } = props;
    return (
        <HMenu
            as="div"
            className={classNames(cl.menu, [className])}
        >
            <HMenu.Button className={cl.btn}>{trigger}</HMenu.Button>
            <HMenu.Items className={cl.list}>
                {items.map((item) => {
                    return (
                        <HMenu.Item
                            key={""}
                            as={Fragment}
                        >
                            {({ active }) => (
                                <Button className={classNames(cl.item, [], { [cl.active]: active })}>
                                    {""}
                                </Button>
                            )}
                        </HMenu.Item>
                    );
                })}
            </HMenu.Items>
        </HMenu>
    );
});

