export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = id => {
    return { 
        type: TOGGLE_FAVORITE, 
        payload: id 
    };
};

export const setFilters = filters => {
    return { 
        type: SET_FILTERS,
        payload: filters
    }
}