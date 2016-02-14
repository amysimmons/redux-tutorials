const React = require('react');
const Redux = require('redux');

const counter = (state = 0, action) => {
	switch (action.type){
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

const {createStore} = Redux;
//the above line is es6, it is the same as:
//var createStore = Redux.createStore;
//and the node module way:
//import {createStore} from 'redux'; 

const store = createStore(counter);
//the above line calls createStore with counter as the reducer that manages the state updates

const render = () => {
	document.body.innerText = store.getState();
}

store.subscribe(render);

render();

document.addEventListener('click', () => {
	store.dispatch({type: 'INCREMENT'});
});