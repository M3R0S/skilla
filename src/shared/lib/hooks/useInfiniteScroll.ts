import { useEffect, MutableRefObject } from "react";

export interface UseInfiniteScrollParams<T extends HTMLElement, W extends HTMLElement> {
    callback?: VoidFunction;
    triggerRef: MutableRefObject<T | null>;
    wrapperRef: MutableRefObject<W | null>;
}

export const useInfiniteScroll = <T extends HTMLElement, W extends HTMLElement>(
    params: UseInfiniteScrollParams<T, W>
) => {
    const { callback, triggerRef, wrapperRef } = params;

    useEffect(() => {
        const triggerRefCurrent = triggerRef.current;
        const wrapperRefCurrent = wrapperRef.current;
        let observer: IntersectionObserver | null = null;

        if (callback) {
            const intersectionOptions: IntersectionObserverInit = {
                root: wrapperRefCurrent,
                rootMargin: "0px",
                threshold: 0.1,
            };

            const intersectionCallback: IntersectionObserverCallback = ([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            };

            observer = new IntersectionObserver(intersectionCallback, intersectionOptions);

            if (triggerRefCurrent) {
                observer.observe(triggerRefCurrent);
            }
        }

        return () => {
            if (observer && triggerRefCurrent) {
                observer.unobserve(triggerRefCurrent);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};

