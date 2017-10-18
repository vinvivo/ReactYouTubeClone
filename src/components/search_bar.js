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
    render() {
        return <input onChange = { event => console.log(event.target.value) } />;
    }
}

export default SearchBar;   // allow other components to import SearchBar