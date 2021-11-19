import { applyMiddleware, combineReducers } from "redux";

import { getDefaultMiddleware , configureStore, createReducer } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from 'redux-devtools-extension';
import { addContact, contactsFilter, deleteContact } from "./actions";
const persistConfig = {
    key: 'contacts',
    storage,
}
// const contactsList = (state = [...savedArr], { type, payload }) => {
//     switch (type) {
//         case 'addContact': return  [...state, payload]
                
//         case 'deleteContact': return state.filter(contact => contact.id !== payload)
//         default: return state;
            
//     };
// }
// const contactsFilter = (state = '', { type, payload }) => {
//     switch (type) {
//         case 'contactsFilter': return  payload;

//         default: return state;
//      }
// }
// const contactsReducer = combineReducers({
//     contacts: contactsList,
//     filter: contactsFilter,
// });
// const store = createStore(contactsReducer, composeWithDevTools(
//     applyMiddleware()));
const contactsList = createReducer([], {
    [addContact]: (state, {payload}) => [...state,payload],
    [deleteContact]: (state,{payload}) => state.filter(contact => contact.id !== payload)
})
const filter = createReducer('', {
    [contactsFilter]: (_, { payload }) => payload,
})
const persistedReducer = persistReducer(persistConfig, combineReducers({
    contacts: contactsList,
}))
const store = configureStore({
    reducer: {
    contacts: persistedReducer,
    filter: filter,
    },
    middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
    devTools: process.env.NODE_ENV === 'development',
})
const persistor = persistStore(store);
export default { store, persistor };