import { GET_FIRST_DATA } from './actions';

const initialState = [];

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FIRST_DATA:
            const items = action.payload
            return {
                ...state, items
            }
        default:
            return state;
    }
}