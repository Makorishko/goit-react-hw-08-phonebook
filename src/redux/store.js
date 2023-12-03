import { configureStore } from '@reduxjs/toolkit';
import { addContactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './contacts/filterSlice';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
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