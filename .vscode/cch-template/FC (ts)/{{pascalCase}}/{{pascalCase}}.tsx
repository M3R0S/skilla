import { FC, memo } from "react";
import classNames from "classnames";

import cl from './{{pascalCase}}.module.scss'
import { {{pascalCase}}Props } from "./{{pascalCase}}.types";

export const {{pascalCase}}: FC<{{pascalCase}}Props> = memo((props) => {
    const { className } = props;

    return (
        <div className={classNames(cl.{{snakeCase}}, [className])}>
            
        </div>
    );
});