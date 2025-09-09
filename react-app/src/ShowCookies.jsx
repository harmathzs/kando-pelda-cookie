import React from "react";

export default class ShowCookies extends React.Component {
    state = {
        cookieStr: "cookie string is empty yet"
    }

    componentDidMount() {
        this.setState({cookieStr: document.cookie})
    }

    render() {
        return <div>
            <p>
                {this.state.cookieStr ? this.state.cookieStr : "cookie string is empty yet"}
            </p>
        </div>
    }
}