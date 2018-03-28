import React from 'react';
import TextContent from './TextContent';

class TextContainer extends React.Component {
  render() {
    return (
      <div className="text-container">
        {
          this.props.allInputFields.map( (textObj, index) => {
            return <TextContent key={index} textContent={textObj.inputFieldText} />
          })
        }
      </div>
    );
  }
}

export default TextContainer;