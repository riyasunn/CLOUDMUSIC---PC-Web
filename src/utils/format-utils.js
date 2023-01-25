export const getCount = (count) => {
    if (count < 1000) {
        return count;
    }else if (1 < Math.floor(count/1000) && Math.floor(count/1000) < 1000) {
        return Math.floor(count/1000) + "K";
    } else {
        return Math.floor(count/100000)/10  + "M";
    }
};

export const setImageSize = (imgUrl, size) => {
    return `${imgUrl}?param=${size}x${size}`;
};

//format millisecond to time
export function formatDate(time, fmt) {
    let date = new Date(time);
  
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};

export function formatMonthDay(time) {
    return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
    return formatDate(time, "mm:ss");
}

//format song src
export const getPlaySong = (id) => {
        return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}