import { FC } from "react";
import classNames from "classnames";

import cl from "./Flex.module.scss";
import { FlexProps } from "./Flex.types";

export const Flex: FC<FlexProps> = (props) => {
    const {
        className,
        Tag = "div",
        children,
        direction,
        alignItems = "normal",
        justifyContent = "normal",
        rowGap,
        columnGap,
        gap,
        max,
        wrap = "nowrap",
        grow,
        ...otherProps
    } = props;

    const classes = [
        className,
        cl[`justify_content_${justifyContent}`],
        cl[`align_items_${alignItems}`],
        cl[`direction_${direction}`],
        cl[`wrap_${wrap}`],
    ];

    const mods = {
        [cl[`gap_${gap}`]]: Boolean(gap),
        [cl.max]: max,
        [cl[`gap_row_${rowGap}`]]: Boolean(rowGap),
        [cl[`gap_column_${columnGap}`]]: Boolean(columnGap),
        [cl[`grow_${grow}`]]: Boolean(grow),
    };

    return (
        <Tag
            className={classNames(cl.flex, classes, mods)}
            {...otherProps}
        >
            {children}
        </Tag>
    );
};

