// import * as actionTypes from './type';
import { RECOMMEND_ACTION_TYPE as actionTypes} from './type';

import { getTopBanners, getHotRecommends, getNewAlbums, getRankingList, getArtistList } from '../../../../../services/recommend';
import { createAcion } from '../../../../../store/create-actions';
import create from '@ant-design/icons/lib/components/IconFont';

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
        // console.log("get new albums", response.data.albums);
        dispatch(changeNewAlbums(response.data.albums));
    } catch(err) {
        console.log("get NewAlbums", err);
    };
};

//get Ranking list actions:
const changeUpRanking = (upRanking) => createAcion(actionTypes.CHANGE_UP_RANKING, upRanking);
const changeNewRanking = (newRanking) => createAcion(actionTypes.CHANGE_NEW_RANKING, newRanking);
const changeOriginalRanking = (originalRanking) => createAcion(actionTypes.CHANGE_ORIGINAL_RANKING, originalRanking);


export const getRankingAction = (id) => async(dispatch) => {
    try{
        const response = await getRankingList(id);
        // console.log("get ranking", response.data.playlist);
        switch (id) {
            case 19723756:
                dispatch(changeUpRanking(response.data.playlist));
                // console.log("get upRanking", response.data.playlist);
                break;
            case 3779629:
                dispatch(changeNewRanking(response.data.playlist));
                // console.log("get newRanking", response.data.playlist);
                break;
            case 2884035:
                dispatch(changeOriginalRanking(response.data.playlist));
                // console.log("get originalRanking", response.data.playlist);
                break;
            default:
                console.log("other response in ranking list");
        }
        
    }catch (err) {
        console.log("get ranking action error", err);
    }
};

//settled singers:
const changeSettledSingers = ( settleSingers ) => {
    console.log("settleSingers", settleSingers);
    return (
        createAcion (actionTypes.CHANGE_SETTLE_SINGERS, settleSingers)
    );
}
    

export const getSettledSingersAction = () => async(dispatch) => {
    try {
        const response = await getArtistList(5, 5001);
        console.log("settled singer ", response);
        dispatch(changeSettledSingers(response.data.artists))
    } catch (err) {
        console.log("settled singer ", err);
    }
};

