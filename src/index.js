import React from 'react';
import { ReactDOM } from 'react';
import {legacy_createStore as createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './counter';


const store = createStore(reducer);
const {dispatch} = store;

// так работает bindActionCreator, наглядный пример:
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }
const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});

ReactDOM.render()