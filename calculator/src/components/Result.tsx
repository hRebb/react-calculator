import { Component } from "react";
import { ResultProps } from "./utils/types";

class Result extends Component<ResultProps> {
    render() {
        return <input type="text" value={this.props.value} readOnly />
    }
}

export default Result;