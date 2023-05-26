import { FC, memo } from "react";

import cl from "./MainPage.module.scss";

import { Navbar } from "widgets/Navbar";
import { Page } from "widgets/Page";
import audio from "shared/assets/sound/sound_kish.mp3";
import { Player } from "shared/ui/Player";

const MainPage: FC = memo(() => {
    return (
        <Page className={cl.main_page}>
            <Navbar page="main" />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Player
                    src={audio}
                    duration={236}
                />
            </div>
        </Page>
    );
});

export default MainPage;
