// import * as actionTypes from './type';
import { RECOMMEND_ACTION_TYPE as actionTypes} from './type';

import { getTopBanners, getHotRecommends } from '../../../../../services/recommend';
import { createAcion } from '../../../../../store/create-actions';

//Top bannner actions:
const changeTopBanner = (topBanners) => createAcion(actionTypes.CHANGE_TOP_BANNERS, topBanners)

export const getTopBannersAction = () => async(dispatch) => {
    try{
        const response = await getTopBanners();
        // console.log(response.data.banners);
        dispatch(changeTopBanner(response.data.banners));
       } catch(err) {
         console.log(err);
    };
};
    
//Hot recommend actions:
const changeHotRecommends = (res) => createAcion(actionTypes.CHANGE_HOT_RECOMMEND, res);

export const getHotRecommendsAction = () => async(dispatch) => {
    try{
        const response = await getHotRecommends()
        console.log("hot recommend action", response.data.result);
        dispatch(changeHotRecommends(response.data.result));
    } catch(err) {
        console.log(err);
    }
}
