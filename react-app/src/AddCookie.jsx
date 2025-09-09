import React from "react";

export default class AddCookie extends React.Component {
    state = {
        key: "",
        value: "",
    }

    handleKeyChange = e => {
        this.setState({key: e.target.value})
    }
    handleValueChange = e => {
        this.setState({value: e.target.value})
    }

    handleButtonClick = e => {
        e.preventDefault();

        let d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        let expires = "expires=" + d.toUTCString();
        document.cookie = this.state.key + "=" + this.state.value + "; " + expires;

        console.log('cookie after handleButtonClick', document.cookie);

        // Notify parent to refresh cookie state
        if (this.props.onChange) {
            this.props.onChange();
        }
    };

    render() {
        return <div>
            <label htmlFor="input-key">Key: </label>
            <input type="text" name="input-key" id="input-key" placeholder="Key..." onChange={this.handleKeyChange} />
            <label htmlFor="input-value">Value: </label>
            <input type="text" name="input-value" id="input-value" placeholder="Value..." onChange={this.handleValueChange} />
            <button onClick={this.handleButtonClick}>Add to cookies</button>
        </div>
    }
}