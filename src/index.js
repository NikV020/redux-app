import React from 'react';
import { createRoot } from 'react-dom/client';
import {legacy_createStore as createStore, bindActionCreators} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';


const store = createStore(reducer);
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// так работает bindActionCreator, наглядный пример:
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }
// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>);



