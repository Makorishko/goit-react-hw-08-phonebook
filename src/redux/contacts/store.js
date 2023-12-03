import { configureStore } from '@reduxjs/toolkit';
import { addContactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from 'redux/auth/slice';

export const store = configureStore({
  reducer: {
    contacts: addContactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
