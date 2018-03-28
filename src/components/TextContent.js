import React from 'react';

class TextContent extends React.Component {
  render() {
    return (
      <div className="text-content">
        <p>{ this.props.textContent }</p>     
      </div>
    );
  }
}

export default TextContent;