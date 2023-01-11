export const getCount = (count) => {
    if (count < 1000) {
        return count;
    }else if (1 < Math.floor(count/1000) && Math.floor(count/1000) < 1000) {
        return Math.floor(count/1000) + "K";
    } else {
        return Math.floor(count/100000)/10  + "M";
    }
};