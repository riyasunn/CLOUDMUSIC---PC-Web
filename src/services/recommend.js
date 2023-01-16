import request from './request';

export const getTopBanners = () => {
    return request({
        url: '/banner'
    });
};

export const getHotRecommends = () => {
    return request({
        url: '/personalized',
        params: {
            limit: 8
        }
    });
};

export const getNewAlbums = () => {
    return request({
        url: '/album/new',
        params: {
            limit: 10
        },
    });
};


// can get Top list name & id, then get details for each top list
export const getTopListInfo = () => {
    return request({
        url: '/toplist'
    });
};

export const getRankingList = (id) => {
    return request({
        url: '/playlist/detail',
        params: {
            id
        }
    });
};