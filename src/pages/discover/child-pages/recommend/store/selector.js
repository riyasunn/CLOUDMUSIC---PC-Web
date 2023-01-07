import { createSelector } from 'reselect';

const selectRecommendReducer = (state) => state.recommend;

export const selectTopBanners = createSelector(
    [selectRecommendReducer],
    (recommend) => recommend.topBanners,
);