import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./Img.module.scss";
import { ImgProps } from "./Img.types";

export const Img: FC<ImgProps> = memo((props) => {
    const { className, alt, src, ...otherProps } = props;

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cl.img, [className])}
            {...otherProps}
        />
    );
});

