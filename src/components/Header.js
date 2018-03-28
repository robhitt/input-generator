import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <span className="header-input-generator">Input Generator </span>
        <span className="header-byRH">by Rob Hitt</span>
      </div>
    );
  }
}

export default Header;