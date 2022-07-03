import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { contactsReducer } from './contacts';

const contactsPersistConfig = {
  key: 'auth',
  storage,
};
export const rootReducer = combineReducers({
  contacts: persistReducer(contactsReducer),
});
