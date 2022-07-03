import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import { rootReducer } from './reducer';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  //   blacklist: ['filter'],
};

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware,
//     devTools:
// })
export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, rootReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  logger,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
