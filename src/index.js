/* jshint esversion: 6 */
// AIzaSyDvCpJsq5ihWkaYJOAdnCF9SPlNCt21-jc

import React from 'react';  // find a module named 'react' and import it under the variable name 'React"
import ReactDOM from 'react-dom';   // react-dom is the module that puts the generated HTML into the DOM, so need to use the methods from that module to put things in the DOM.
import SearchBar from './components/search_bar';    // Must provide relative path reference.

const API_KEY = 'AIzaSyDvCpJsq5ihWkaYJOAdnCF9SPlNCt21-jc';

// Create a new component; this component should produce some HTML.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );  // <div></div> tags *looks* like JS, but it is actually JSX, which is transpiled by webpack and babel to HTML.
}

// Take this component's generated HTML and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));  // ReactDOM wants to render instances, so to make an instance of the App class component, add self-closing JSX tags (angle tags) around it. The second argument is telling the program WHERE to put the App component--essentailly saying, look for a class name 'container' and put the code there.