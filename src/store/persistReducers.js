import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

export default reducers => {
    const persistedReducer = persistReducer({
        key: '3lm',
        storage,
        whitelist: ['roles', 'employees']
    }, reducers);

    return persistedReducer;
}