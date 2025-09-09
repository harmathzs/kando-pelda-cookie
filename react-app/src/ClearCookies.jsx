import React from "react";

export default class ClearCookies extends React.Component {
    handleClear = e => {
        e.preventDefault();
    }

    render() {
        return <div>
            <button onClick={this.handleClear}>Clear cookies</button>
        </div>
    }
}