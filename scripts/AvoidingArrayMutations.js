const React = require('react');
const ReactDom = require('react-dom');
const Redux = require('redux');
const expect = require('expect');
const deepFreeze = require('deep-freeze');

//splice and push are mutating methods, 
//this demonstrates how the es6 spread operator (or concat)
//as well as slice can be used in redux to avoid mutation 

const addCounter = (list) => {
	//es6 array spread operator 
	return [...list, 0];
};

const removeCounter = (list, index) => {

	return [
		...list.slice(0, index),
		...list.slice(index + 1)
	];

};

const incrementCounter = (list, index) => {
	return [
		...list.slice(0, index),
		list[index] + 1,
		...list.slice(index + 1)
	];
};

const testAddCounter = () => {
	const listBefore = [];
	const listAfter = [0];

	//deepFreeze means listBefore cannot be mutated
	deepFreeze(listBefore);

	expect(
		addCounter(listBefore)
	).toEqual(listAfter);
};

const testRemoveCounter = () => {
	const listBefore = [0, 10, 20];
	const listAfter = [0, 20];

	//deepFreeze means listBefore cannot be mutated
	deepFreeze(listBefore);

	expect(
		removeCounter(listBefore, 1)
	).toEqual(listAfter);

};

const testIncrementCounter = () => {
	const listBefore = [0, 10, 20];
	const listAfter = [0, 11, 20];

	//deepFreeze means listBefore cannot be mutated
	deepFreeze(listBefore);

	expect(
		incrementCounter(listBefore, 1)
	).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed');