import React from "react";

export default class AddCookie extends React.Component {
    render() {
        return <div>
            <label htmlFor="input-key">Key: </label>
            <input type="text" name="input-key" id="input-key" placeholder="Key..." />
            <label htmlFor="input-value">Value: </label>
            <input type="text" name="input-value" id="input-value" placeholder="Value..." />
            <button>Add to cookies</button>
        </div>
    }
}