import React from "react";

export default class ClearCookies extends React.Component {
  handleClear = e => {
    e.preventDefault();

    // Get all cookies
    const cookies = document.cookie.split(";");

    // Expire all cookies by setting to past date
    for (let cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      // Set cookie expiration to past date to delete
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    // Notify parent to refresh state
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClear}>Clear cookies</button>
      </div>
    );
  }
}
