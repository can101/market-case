import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {encryptTransform} from 'redux-persist-transform-encrypt';

const transform = encryptTransform({
    secretKey: 'test',
    onError: function (error) {
        console.log(error)
    }
});

const rootPersistConfig = {
    key: 'root',
    storage,
    transforms: [transform],
    whitelist: ['basket', 'favorites'],
    blacklist: ['products', 'categories']
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)

