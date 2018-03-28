import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeHander = this.onChangeHandler.bind(this);
    this.removeClickHandler = this.removeClickHandler.bind(this);
  }

  onChangeHandler(event) {
    const { value } = event.currentTarget;
    this.props.inputFieldValueHandler(value, this.props.idx);
  }

  removeClickHandler(event) {
    this.props.removeInputField(this.props.idx);
  }

  render() {
    return (
      <div className="input-container">
        <input 
          type="text"
          name="inputText"
          index={ this.props.idx }
          value={ this.props.textValue }
          onChange={ (input) => this.onChangeHander(input) } 
        />
        <div className="inputfield-incrementors" onClick={ this.props.addInputField }>
          <div className="inputfield-plus-minus">+</div>
        </div>
        <div className="inputfield-incrementors" onClick={ this.removeClickHandler }>
          <div className="inputfield-plus-minus">-</div>
        </div>
      </div>
    );
  }
}

export default InputField;