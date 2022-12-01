import {legacy_createStore as createStore} from 'redux';
import reducer from './reducer';
import {inc, dec, rnd} from './actions';


const store = createStore(reducer);
const {dispatch} = store;

document.getElementById('inc').addEventListener('click', () =>{
  dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () =>{
  dispatch(dec());
});
document.getElementById('rnd').addEventListener('click', () =>{
  const value = Math.floor(Math.random() * 10);
  dispatch(rnd(value));
});



const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});

