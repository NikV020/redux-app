import {legacy_createStore as createStore} from 'redux';






const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () =>{
  store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () =>{
  store.dispatch(dec());
});
document.getElementById('rnd').addEventListener('click', () =>{
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});



const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});

