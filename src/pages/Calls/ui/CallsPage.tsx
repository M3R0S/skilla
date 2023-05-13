import { FC, memo } from "react";

import cl from "./CallsPage.module.scss";

import { Button } from "shared/ui/Button";

const CallsPage: FC = memo(() => {
    return (
        <div className={cl.calls_page}>
            <Button>Hello</Button>
        </div>
    );
});

export default CallsPage;
