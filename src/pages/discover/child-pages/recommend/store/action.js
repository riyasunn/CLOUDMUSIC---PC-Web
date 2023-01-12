// import * as actionTypes from './type';
import { RECOMMEND_ACTION_TYPE as actionTypes} from './type';

import { getTopBanners, getHotRecommends, getNewAlbums } from '../../../../../services/recommend';
import { createAcion } from '../../../../../store/create-actions';

//get Top-bannner actions:
const changeTopBanner = (topBanners) => createAcion(actionTypes.CHANGE_TOP_BANNERS, topBanners)

export const getTopBannersAction = () => async(dispatch) => {
    try{
        const response = await getTopBanners();
        // console.log(response.data.banners);
        dispatch(changeTopBanner(response.data.banners));
       } catch(err) {
         console.log("get TopBanners", err);
    };
};
    
//get Hot-recommend actions:
const changeHotRecommends = (hotRecommends) => createAcion(actionTypes.CHANGE_HOT_RECOMMEND, hotRecommends);

export const getHotRecommendsAction = () => async(dispatch) => {
    try{
        const response = await getHotRecommends()
        // console.log("hot recommend action", response.data.result);
        dispatch(changeHotRecommends(response.data.result));
    } catch(err) {
        console.log("get HotRecommends", err);
    };
};

//get New-ablums actions:
const changeNewAlbums = (newAlbums) => createAcion(actionTypes.CHANGE_NEW_ALBUMS, newAlbums);

export const getNewAlbumsAction = () => async(dispatch) => {
    try{
        const response = await getNewAlbums();
        console.log("get new albums", response.data.albums);
        dispatch(changeNewAlbums(response.data.albums));
    } catch(err) {
        console.log("get NewAlbums", err);
    };
};