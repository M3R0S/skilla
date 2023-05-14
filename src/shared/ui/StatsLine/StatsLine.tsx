import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./StatsLine.module.scss";
import { BackgroundColor, StatsLineProps } from "./StatsLine.types";

export const StatsLine: FC<StatsLineProps> = memo((props) => {
    const { className, procentValue, background } = props;

    const oneProcent = 1.56;
    const activeWidth = oneProcent * procentValue;

    return (
        <div className={classNames(cl.stats_line, [className])}>
            <div
                style={{
                    width: activeWidth > 156 ? 156 : activeWidth,
                    background: BackgroundColor[background],
                }}
                className={cl.color_line}
            />
        </div>
    );
});

