import { Component } from "react";
import { CalculatorState } from "./utils/types";
import Operation from "./Operation";
import Result from "./Result";
import './calculator.css';

class Calculator extends Component<{}, CalculatorState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            result: "0",
        };
    }

    handleButtonClick = (value: string) => {
        if (value === "=") {
            try {
                const calculateResult = eval(this.state.result);
                this.setState({ result: String(calculateResult) });
            } catch(error) {
                this.setState({ result: "Error" });
            }
        } 
        else if (value === "C") {
            this.setState({ result: "0" })
        }
        else {
            this.setState((prevState) => ({
                result: prevState.result === "0" ? value: prevState.result + value,
            }));
        }
    };

    render() {
        return (
            <div className="calculator">
                <Result value={this.state.result} />
                <Operation onClick={this.handleButtonClick} />
            </div>
        );
    }
}

export default Calculator