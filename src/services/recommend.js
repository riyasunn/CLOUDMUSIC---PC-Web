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