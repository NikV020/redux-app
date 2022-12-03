import React from 'react';
import { ReactDOM } from 'react-dom';
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

ReactDOM.render(<Counter
  counter={store.getState}
  inc={inc}
  dec={dec}
  rnd={() => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
  }}/>, document.getElementById('root'));