import { configureStore } from '@reduxjs/toolkit';
import { commentsReducer } from '../redux/reducer';


export const store = configureStore({
    reducer: {
        comments: commentsReducer
    },
});