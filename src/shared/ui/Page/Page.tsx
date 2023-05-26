import { FC, useRef } from "react";
import classNames from "classnames";

import cl from "./Page.module.scss";
import { PageProps } from "./Page.types";

import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll";

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | null>(null);

    useInfiniteScroll<HTMLDivElement, HTMLDivElement>({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(cl.page, [className])}
        >
            {children}
            <div
                ref={triggerRef}
                className={cl.target}
            />
        </main>
    );
};

