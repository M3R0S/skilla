import { FC, memo } from "react";

import cl from "./MainPage.module.scss";

const MainPage: FC = memo(() => {
    return <div className={cl.main_page}>Main</div>;
});

export default MainPage;
