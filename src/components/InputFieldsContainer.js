import React from 'react';
import InputField from './InputField';

class InputFieldsContainer extends React.Component {

  render() {
    return (
      <div>
        { 
          this.props.allInputFields.map( (inputField, index) => {
            return (
              <InputField 
                key={index}
                idx={index}
                textValue={ inputField.inputFieldText }
                inputFieldValueHandler={ this.props.inputFieldValueHandler } 
                addInputField={ this.props.addInputField }
                removeInputField={ this.props.removeInputField }
              />
            )
          })
        }
      </div>
    );
  }
}

export default InputFieldsContainer;