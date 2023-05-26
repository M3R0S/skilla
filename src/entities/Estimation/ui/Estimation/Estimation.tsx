import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Estimation.module.scss";
import { EstimationProps } from "./Estimation.types";
import { Estimation as EstimationType } from "../../model/types/estimation";

import { ReactComponent as EllipseSvg } from "shared/assets/svg/call/ellipse.svg";
import { HStack } from "shared/ui/Stack";

export const Estimation: FC<EstimationProps> = memo((props) => {
    const { className, estimation } = props;

    return (
        <HStack gap="8">
            <HStack
                className={cl.ellipses}
                gap="2"
            >
                {estimation === "great" &&
                    [1, 2, 3].map((item) => (
                        <EllipseSvg
                            key={item}
                            className={cl.great_svg}
                        />
                    ))}
                {estimation === "well" &&
                    [1, 2].map((item) => (
                        <EllipseSvg
                            key={item}
                            className={cl.well_svg}
                        />
                    ))}
                {estimation === "bad" && <EllipseSvg className={cl.bad_svg} />}
            </HStack>
            <div className={classNames(cl.estimation, className, cl[estimation])}>
                {EstimationType[estimation]}
            </div>
        </HStack>
    );
});

