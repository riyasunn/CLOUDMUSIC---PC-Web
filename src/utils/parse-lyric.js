
const parseExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/;

export const parseLyric = (lyricString) => {
    const lineStrings = lyricString.split("\n");
    console.log(lineStrings); //['time content', 'time2 content2', ...]
    const lyrics = [];

    for (let line of lineStrings) {
        if (line) {
            const result = parseExp.exec(line);
            // console.log("lyric-time:", result);
            if (!result) continue;
            const time1 = result[1] * 60 * 1000;
            const time2 = result[2] * 1000;
            const time3 = result[3].length === 3 ? result[3] * 1 : result[3] *10;
            const time = time1 + time2 + time3; //millionsecond
            // console.log("lyric-time-millionsecond: ", time);
            const content = line.replace(parseExp, "").trim();
            const lineObj = {time,content};
            // console.log("line object: ", lineObj);
            lyrics.push(lineObj);
        };
    };
    return lyrics;
}