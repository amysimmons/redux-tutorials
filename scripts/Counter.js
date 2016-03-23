const React = require('react');
const ReactDom = require('react-dom');
const Redux = require('redux');

//the reducer 
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
	
//dumb Counter component, containing no business logic, 
//it just specified how the state is rendered and how the callbacks are bound to the events
const Counter = ({
	value,
	onIncrement,
	onDecrement
}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

const {createStore} = Redux;
//the above line is es6, it is the same as:
//var createStore = Redux.createStore;
//and the node module way:
//import {createStore} from 'redux'; 

const store = createStore(counter);
//the above line calls createStore with counter as the reducer that manages the state updates

const render = () => {
	ReactDom.render(
		<Counter 
			value={store.getState()}
			onIncrement={()=>
				store.dispatch({
					type: 'INCREMENT'
				})
			}
			onDecrement={()=>
				store.dispatch({
					type: 'DECREMENT'
				})
			}/>, 
		document.getElementById('counter')
	);
};

//we subscribe to the redux store so our render function runs any time the state changes
store.subscribe(render);
render();