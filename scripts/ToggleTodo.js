const React = require('react');
const ReactDom = require('react-dom');
const Redux = require('redux');
const expect = require('expect');
const deepFreeze = require('deep-freeze');

//a mutated version flips the completed field and reassigns it on the passed in object
//mutations are not allowed in redux
//you could create a new object with every field the same as the object passed in, except the completed field flipped
//instead, you should use Object.assign

const toggleTodo = (todo) => {
	return Object.assign({}, todo, {
		completed: !todo.completed
	});
};

const testToggleTodo = () => {

	const todoBefore = {
		id: 0,
		text: 'Learn Redux',
		completed: false
	};

	const todoAfter = {
		id: 0,
		text: 'Learn Redux',
		completed: true
	};

	deepFreeze(todoBefore);

	expect(
		toggleTodo(todoBefore)
	).toEqual(todoAfter);

};

testToggleTodo();
console.log('All tests passed')