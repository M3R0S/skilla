import {
    ChangeEvent,
    FC,
    memo,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    MouseEvent,
} from "react";
import classNames from "classnames";

import cl from "./Player.module.scss";
import { PlayerProps } from "./Player.types";
import { Text } from "../Text";
import { HStack } from "../Stack";
import { Button } from "../Button";

import { ReactComponent as PlaySvg } from "shared/assets/svg/player/play.svg";
import { ReactComponent as PauseSvg } from "shared/assets/svg/player/pause.svg";
import { ReactComponent as DownloadSvg } from "shared/assets/svg/player/download.svg";
import { ReactComponent as CloseSvg } from "shared/assets/svg/player/close.svg";
import { normalizeTime } from "shared/lib/helpers/normalizeTime";

export const Player: FC<PlayerProps> = memo((props) => {
    const { className, duration, src } = props;

    const [isPlay, setIsPlay] = useState<boolean>(false);
    const [activeLine, setActiveLine] = useState<number>(0);
    const [timeInfo, setTimeInfo] = useState<number>(0);
    const [pageX, setPageX] = useState<number>(0);
    const [pageY, setPageY] = useState<number>(0);
    const ref = useRef<NodeJS.Timer | null>(null);

    const Sound = useMemo(() => new Audio(src), [src]);
    Sound.preload = "metadata";

    useEffect(() => {
        if (!ref.current && isPlay) {
            ref.current = setInterval(() => {
                setActiveLine(Sound.currentTime);
                console.log("log");
            }, 1000);
        }

        if (!isPlay && ref.current) {
            clearInterval(ref.current);
            ref.current = null;
        }

        return () => {
            if (ref.current) {
                clearInterval(ref.current);
            }

            ref.current = null;
        };
    }, [Sound.currentTime, Sound.duration, isPlay]);

    useEffect(() => {
        Sound.currentTime = activeLine;
    }, [Sound, activeLine]);

    useEffect(() => {
        return () => {
            Sound.pause();
            setIsPlay(false);
        };
    }, [Sound]);

    const onChangeActiveLine = (e: ChangeEvent<HTMLInputElement>) => {
        setActiveLine(Number(e.target.value));
    };

    const onMouseEnterInput = (e: MouseEvent<HTMLInputElement>) => {
        setTimeInfo(Number(calcSliderPos(e).toFixed(0)));
        setPageX(e.pageX);
        setPageY(e.pageY);
    };

    const onMouseLeaveInput = () => {
        setTimeInfo(0);
        setPageX(0);
        setPageY(0);
    };

    const onPlay = useCallback(() => {
        setIsPlay(true);
        Sound.play();
    }, [Sound]);

    const onPause = useCallback(() => {
        setIsPlay(false);
        Sound.pause();
    }, [Sound]);

    function calcSliderPos(e: any) {
        return (
            ((e.clientX - e.target.offsetLeft) / e.target.clientWidth) *
            parseFloat(e.target.getAttribute("max"))
        );
    }

    return (
        <HStack className={classNames(cl.player, [className])}>
            <Text
                className={cl.text}
                size="15"
                theme="black"
            >
                {normalizeTime(Number(Sound.duration.toFixed(0))) || normalizeTime(duration)}
            </Text>
            {isPlay ? (
                <Button
                    onClick={onPause}
                    theme="without_filling"
                >
                    <PauseSvg className={cl.pause} />
                </Button>
            ) : (
                <Button
                    onClick={onPlay}
                    theme="without_filling"
                >
                    <PlaySvg className={cl.play} />
                </Button>
            )}
            <Text
                size="14"
                theme="black"
                className={cl.time_info}
                style={{
                    top: pageY - 35,
                    left: pageX - 8,
                }}
            >
                {normalizeTime(timeInfo)}
            </Text>
            <input
                type="range"
                min={0}
                max={Sound.duration || duration}
                className={cl.line}
                value={activeLine}
                onChange={onChangeActiveLine}
                onMouseEnter={onMouseEnterInput}
                onMouseLeave={onMouseLeaveInput}
            />
            <a
                href={src}
                download={src}
            >
                <DownloadSvg className={cl.download} />
            </a>
            <Button theme="without_filling">
                <CloseSvg className={cl.close} />
            </Button>
        </HStack>
    );
});

