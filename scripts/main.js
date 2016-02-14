const React = require('react');
const ReactDom = require('react-dom');
const Counter = require('./Counter');

ReactDom.render(<Counter />, document.querySelector('#container'));