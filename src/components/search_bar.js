/* jshint esversion: 6 */
import React, { Component } from 'react';   // ", { Component }" pulls a method called Component and sets it as a namespace for use in this component.

// Chose to write a class-based component (vs. functional component -- where SearchBar is defined as a function) in order to enable this entire component have a sense of its state and what changes are happening within it (i.e., search terms are being entered into input box)

/* All of the below can be refactored using an ES6 arrow function.
class SearchBar extends Component {   // Create a class 'SearchBar' and give it access to all functionality of the React.Component class
    // Every class must have a render function that returns JSX.
    render() {  // define a method within the class to render JSX
        return <input onChange = {this.onInputChange} />;
    }

    // Event handler.
    onInputChange(event) {   // Naming convention: on + name of element + event description.  Parameter is usually an event object that can be named anything (not just 'event')
        console.log(event.target.value);
    }
}
*/

class SearchBar extends Component {
    // For class-based components, this is how to initialize "state"
    constructor(props) {
        super(props);

        // Initializing a property 'term' (aka search term) to keep track of in state. It will start off as an empty string '' and get modified onInputChange.
        // Syntax:  this.state = object
        this.state = { term: '' };
    }

    render() {
        // The value of the input from the Search Bar will be set to equal the value of the state. This is called a controlled input, which means the value of the input will mirror the state (vs. the value of the input changing the state).  I think of this like the developer sees the data/input before the user does.
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange={ event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;   // allow other components to import SearchBar