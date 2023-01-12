import { Map } from 'immutable';

import { RECOMMEND_ACTION_TYPE as actionTypes} from './type';

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAblums: [],
});

const reducer = (state = defaultState, action ) => {
    const { type, payload } = action;
    switch(type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            // return {...state, topBanners: payload}
            return state.set("topBanners", payload);

        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", payload);

        case actionTypes.CHANGE_NEW_ALBUMS:
            return state.set("newAlbums", payload);
            
        default:
            return state;
    }
};

export default reducer;