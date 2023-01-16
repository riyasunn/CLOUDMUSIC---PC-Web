import { createSelector } from 'reselect';

const selectRecommendReducer = (state) => state.get("recommend");

export const selectTopBanners = createSelector(
    [selectRecommendReducer],
    (recommend) => recommend.get("topBanners"),
);

export const selectHotRecommends = createSelector(
    [selectRecommendReducer],
    (recommend) => recommend.get("hotRecommends"),
);

export const selectNewAlbums = createSelector(
    [selectRecommendReducer],
    (recommend) => recommend.get("newAlbums"),
);

//selector for rankings:
export const selectUpRanking = createSelector(
    [selectRecommendReducer],
    (recommend) => recommend.get("upRanking"),
);

export const selectNewRanking = createSelector(
    [selectRecommendReducer],
    (recommend) => recommend.get("newRanking"),
);

export const selectOriginalRanking = createSelector(
    [selectRecommendReducer],
    (recommend) => recommend.get("originalRanking"),
);