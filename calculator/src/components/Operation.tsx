import { Component } from "react";
import { OperationProps } from "./utils/types";

class Operation extends Component<OperationProps> {
    handleClick = (value: string) => {
        this.props.onClick(value);
    };

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick("1")}>1</button>
                <button onClick={() => this.handleClick("2")}>2</button>
                <button onClick={() => this.handleClick("3")}>3</button>
                <button onClick={() => this.handleClick("4")}>4</button>
                <button onClick={() => this.handleClick("5")}>5</button>
                <button onClick={() => this.handleClick("6")}>6</button>
                <button onClick={() => this.handleClick("7")}>7</button>
                <button onClick={() => this.handleClick("8")}>8</button>
                <button onClick={() => this.handleClick("9")}>9</button>
                <button onClick={() => this.handleClick("0")}>0</button>
                <button onClick={() => this.handleClick("+")}>+</button>
                <button onClick={() => this.handleClick("-")}>-</button>
                <button onClick={() => this.handleClick("*")}>*</button>
                <button onClick={() => this.handleClick("/")}>/</button>
                <button onClick={() => this.handleClick("=")}>=</button>
            </div>
        )
    }
}

export default Operation;