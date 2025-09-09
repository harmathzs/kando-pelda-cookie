import React from "react";

export default class ShowCookies extends React.Component {
    state = {
        cookieStr: "cookie string is empty yet"
    }

    componentDidMount() {
        const cookies = document.cookie;
        console.log("Cookies:", cookies); // check if any cookies visible here
        this.setState({cookieStr: cookies});
    }


render() {
    const { cookieStr } = this.props;
    return (
        <div>
            <p>
                {cookieStr && cookieStr.length > 0 ? cookieStr : "cookie string is empty yet"}
            </p>
        </div>
    )
}
}