const React = require('react');
const ReactDom = require('react-dom');
const Counter = require('./Counter');



//the render function is called any time the store state changes
//so i can pass the current state of the store as a prop to my root component

ReactDom.render(
	<Counter/>, 
	document.querySelector('#container')
);