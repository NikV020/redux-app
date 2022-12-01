import {legacy_createStore as createStore} from 'redux';
import reducer from './reducer';
import {inc, dec, rnd} from './actions';


const store = createStore(reducer);
const {dispatch} = store;

const incDispatch = () => dispatch(inc());
const decDispatch = () => dispatch(dec());
const rndDispatch = (value) => dispatch(rnd(value));

document.getElementById('inc').addEventListener('click', incDispatch);
document.getElementById('dec').addEventListener('click', decDispatch);
document.getElementById('rnd').addEventListener('click', () =>{
  const value = Math.floor(Math.random() * 10);
  rndDispatch(value);
});



const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});

