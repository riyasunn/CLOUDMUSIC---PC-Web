import { RECOMMEND_ACTION_TYPE as actionTypes} from './type';

const defaultState = {
    topBanners: [],
};

const reducer = (state = defaultState, action ) => {
    const { type, payload } = action;
    switch(type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return {...state, topBanners: payload}
        default:
            return state;
    }
};

export default reducer;