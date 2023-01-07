// import * as actionTypes from './type';
import { RECOMMEND_ACTION_TYPE as actionTypes} from './type';

import { getTopBanners } from '../../../../../services/recommend';
import { createAcion } from '../../../../../store/create-actions';

const changeTopBanner = (response) => createAcion(actionTypes.CHANGE_TOP_BANNERS, response)

export const getTopBannersAction = () => async(dispatch) => {
    try{
        const response = await getTopBanners();
        console.log(response.data.banners);
        dispatch(changeTopBanner(response.data.banners));
       } catch(err) {
         console.log(err);
    };
    
}
    

