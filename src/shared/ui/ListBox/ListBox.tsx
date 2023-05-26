import { Fragment } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import classNames from "classnames";

import cl from "./ListBox.module.scss";
import { ListBoxProps } from "./ListBox.types";

import { ReactComponent as ArrowCloseSvg } from "shared/assets/svg/arrow_close12x7.svg";
import { ReactComponent as ArrowOpenSvg } from "shared/assets/svg/arrow_open12x7.svg";
import { genericMemo } from "shared/lib/helpers/genericMemo";

const ListBox = <V extends string>(props: ListBoxProps<V>) => {
    const { className, theme = "none", options, onChangeValue, defaultValue, value } = props;

    return (
        <HListbox
            as="div"
            value={value ?? defaultValue}
            onChange={onChangeValue}
            className={classNames(cl.list_box, className)}
        >
            {({ open }) => (
                <>
                    <HListbox.Button className={cl.trigger}>
                        {options.find((option) => option.value === value)?.title ??
                            options.find((option) => option.value === value)?.content ??
                            defaultValue}
                        {open ? (
                            <ArrowCloseSvg className={classNames(cl.arrow, cl.arrow_open)} />
                        ) : (
                            <ArrowOpenSvg className={classNames(cl.arrow, cl.arrow_close)} />
                        )}
                    </HListbox.Button>
                    <HListbox.Options
                        as="ul"
                        className={cl.options}
                    >
                        {options?.map((option) => (
                            <HListbox.Option
                                key={option.value}
                                value={option.value}
                                as={Fragment}
                            >
                                {({ active, selected }) => (
                                    <li
                                        className={classNames(cl.option, cl[theme], {
                                            [cl.active]: active,
                                            [cl.selected]: selected,
                                        })}
                                    >
                                        {option.content}
                                    </li>
                                )}
                            </HListbox.Option>
                        ))}
                    </HListbox.Options>
                </>
            )}
        </HListbox>
    );
};

export const MemoListBox = genericMemo(ListBox);

