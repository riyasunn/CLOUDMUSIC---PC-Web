import { Map } from 'immutable';

import { RECOMMEND_ACTION_TYPE as actionTypes} from './type';

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAblums: [],

    upRanking: {},
    newRanking: {},
    originalRanking: {},
    settleSingsers: [],

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

        //cases for rankings:
        case actionTypes.CHANGE_UP_RANKING:
            return state.set("upRanking", payload);

        case actionTypes.CHANGE_NEW_RANKING:
            return state.set("newRanking", payload);

        case actionTypes.CHANGE_ORIGINAL_RANKING:
            return state.set("originalRanking", payload);

        case actionTypes.CHANGE_SETTLE_SINGERS:
            return state.set("settleSingsers", payload);

        default:
            return state;
    }
};

export default reducer;