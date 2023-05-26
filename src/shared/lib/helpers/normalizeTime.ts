export function normalizeTime(time: number) {
    if (!time) {
        return null;
    }

    if (time === 0) {
        return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const sec = time - minutes * 60;

    if (sec < 10) {
        return `${minutes}:0${sec}`;
    }

    return `${minutes}:${sec}`;
}

