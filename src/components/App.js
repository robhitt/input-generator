import React, { Component } from 'react';
import Header from './Header';
import InputFieldsContainer from './InputFieldsContainer';
import TextContainer from './TextContainer';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allInputFields: [
        { inputFieldText: '' }
      ]
    }

    this.inputFieldValueHandler = this.inputFieldValueHandler.bind(this);
    this.addInputField = this.addInputField.bind(this);
    this.removeInputField = this.removeInputField.bind(this);
  }

  inputFieldValueHandler(value, index) {
    // 1. use the spread operator to assign to a new variable 
    const updatedTextFields = [ ...this.state.allInputFields ];
    
    // 2. find the field to change
    updatedTextFields[index] = { inputFieldText: value };

    // 3. set state
    this.setState({
      allInputFields: updatedTextFields
      // allInputFields.index: value
    });
  }

  addInputField() {
    // 1. use the spread operator to assign to a new variable  
    const updatedTextFields = [ ...this.state.allInputFields ];
    
    // 2. Create new input field
    let inputField = { inputFieldText: '' };
    updatedTextFields.push(inputField);
    
    // 3. Set State
    this.setState({
      allInputFields: updatedTextFields
    })
  }

  removeInputField(index) {
    // 1. use the spread operator to assign to a new variable  
    const updatedTextFields = [ ...this.state.allInputFields ];
    
    // 2. Remove specific index
    updatedTextFields.splice(index, 1);

    // 3. Set State
    this.setState({
      allInputFields: updatedTextFields
    })
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <InputFieldsContainer 
          allInputFields={ this.state.allInputFields } 
          inputFieldValueHandler={ this.inputFieldValueHandler } 
          addInputField={ this.addInputField }
          removeInputField={ this.removeInputField }
        />
        <TextContainer allInputFields={ this.state.allInputFields } />
      </div>
    );
  }
}

export default App;
