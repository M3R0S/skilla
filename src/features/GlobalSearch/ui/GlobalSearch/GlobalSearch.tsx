import { FC, memo } from "react";
import classNames from "classnames";

import cl from "./GlobalSearch.module.scss";
import { GlobalSearchProps } from "./GlobalSearch.types";

import { ReactComponent as SearchSvg } from "shared/assets/svg/navbar/basic_search.svg";
import { Button } from "shared/ui/Button";

export const GlobalSearch: FC<GlobalSearchProps> = memo((props) => {
    const { className } = props;

    return (
        <Button className={classNames(cl.global_search, [className])}>
            <SearchSvg />
        </Button>
    );
});

