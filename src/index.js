/* jshint esversion: 6 */

import React, { Component } from 'react';  // find a module named 'react' and import it under the variable name 'React"
import ReactDOM from 'react-dom';   // react-dom is the module that puts the generated HTML into the DOM, so need to use the methods from that module to put things in the DOM.
import SearchBar from './components/search_bar';    // Must provide relative path reference.
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDvCpJsq5ihWkaYJOAdnCF9SPlNCt21-jc';

// Create a new component; this component should produce some HTML.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

// New method for searching for videos called 'videoSearch' that takes a parameter called 'term'.
videoSearch(term) {
    YTSearch( {key: API_KEY, term: term}, (searchResults) => {
        this.setState({
            searchResults: searchResults,
            selectedVideo: searchResults[0]
        });
    });
}

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={ term => this.videoSearch(term) } />
                <VideoDetail searchResults={this.state.selectedVideo} />
                <VideoList
                    // onVideoSelect only updates App's state--it updates the selectedVideo variable. This is passed as a property into VideoList child component...
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    searchResults={this.state.searchResults} />
            </div>
        );
        // <div></div> tags *looks* like JS, but it is actually JSX, which is transpiled by webpack and babel to HTML.
        // "searchResults={this.state.searchResults} is a means of 'passing props' in React. We're passing prop 'searchResults' from the parent App to the child VideoList."
    }
}

// Take this component's generated HTML and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));  // ReactDOM wants to render instances, so to make an instance of the App class component, add self-closing JSX tags (angle tags) around it. The second argument is telling the program WHERE to put the App component--essentailly saying, look for a class name 'container' and put the code there.