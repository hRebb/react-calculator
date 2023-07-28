import { Component } from "react";
import { OperationProps } from "./utils/types";

class Operation extends Component<OperationProps> {
    handleClick = (value: string) => {
        this.props.onClick(value);
    };

    render() {
        return (
            <div className="button-grid">
                <button onClick={() => this.handleClick("1")}>1</button>
                <button onClick={() => this.handleClick("2")}>2</button>
                <button onClick={() => this.handleClick("3")}>3</button>
                <button className="ops-btn" onClick={() => this.handleClick("+")}>+</button>
                <button onClick={() => this.handleClick("4")}>4</button>
                <button onClick={() => this.handleClick("5")}>5</button>
                <button onClick={() => this.handleClick("6")}>6</button>
                <button className="ops-btn" onClick={() => this.handleClick("-")}>-</button>
                <button onClick={() => this.handleClick("7")}>7</button>
                <button onClick={() => this.handleClick("8")}>8</button>
                <button onClick={() => this.handleClick("9")}>9</button>
                <button className="ops-btn" onClick={() => this.handleClick("/")}>/</button>
                <button onClick={() => this.handleClick("0")}>0</button>
                <button className="reset-btn" onClick={() => this.handleClick("C")}>C</button>
                <button className="total-btn" onClick={() => this.handleClick("=")}>=</button>
                <button className="ops-btn" onClick={() => this.handleClick("*")}>*</button>
            </div>
        )
    }
}

export default Operation;