import {legacy_createStore as createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './actions';


const store = createStore(reducer);
const {dispatch} = store;

// так работает bindActionCreator, наглядный пример:
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);


// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', () =>{
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});



const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});

