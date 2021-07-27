import {combineReducers} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

/**
 * Slices
 */
import userSlice from '@/store/slices/userSlice';

/**
 *
 * @type {{storage, whitelist: *[], key: string}}
 */
const persistUserConfig = {
    key: 'root',
    storage: storage,
    whitelist: [],
}

export default combineReducers({
    userReducer: persistReducer(persistUserConfig, userSlice),
})
