import React from 'react';
import ReactDOM from 'react-dom';
import PhoneBook from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
// store.dispatch(addContact('alex', '123456'))
// console.log(store.dispatch(addContact('alex', '123456')))
// console.log(store.dispatch(addContact('alex2','123456')))

ReactDOM.render(<Provider store={store.store}><PersistGate loading ={null} persistor = {store.persistor}><PhoneBook/></PersistGate></Provider>,document.querySelector('#root'))


