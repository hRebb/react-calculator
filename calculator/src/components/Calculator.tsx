import { Component } from "react";
import { CalculatorState } from "./utils/types";
import Operation from "./Operation";
import Result from "./Result";
import './calculator.css';

class Calculator extends Component<{}, CalculatorState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            currentValue: "0",
            prevValue: "",
            operator: "",
            shouldReset: false,
        };
    }

    evaluateExpression = (first: string, operator: string, sec: string) => {
        const numA = parseFloat(first);
        const numB = parseFloat(sec);
        
        switch (operator) {
            case "+":
                return (numA + numB).toString();
            case "-":
                return (numA - numB).toString();
            case "*":
                return (numA * numB).toString();
            case "/":
                return (numA / numB).toString();    
            default:
                return "Error";
        }
    }

    handleButtonClick = (value: string) => {
        const {
            currentValue,
            prevValue,
            operator,
            shouldReset
        } = this.state;

        if (value === "=") {
            if (prevValue && operator && currentValue) {
                let result = this.evaluateExpression(prevValue, operator, currentValue);
                this.setState({
                    currentValue: result,
                    prevValue: "",
                    operator: "",
                    shouldReset: true,
                });
            }
        } 
        else if (value === "C") {
            this.setState({
                currentValue: "0",
                prevValue: "",
                operator: "",
                shouldReset: false,
            });
        }
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (prevValue && operator && currentValue) {
                let result = this.evaluateExpression(prevValue, operator, currentValue);
                this.setState({
                    prevValue: result,
                    currentValue: "",
                    operator: value,
                    shouldReset: false,
                });
            } else if (currentValue) {
                this.setState({
                    prevValue: currentValue,
                    currentValue: "",
                    operator: value,
                    shouldReset: false,
                });
            }
        } else {
            this.setState((prevState) => ({
                currentValue:
                    shouldReset || prevState.currentValue === "0"
                      ? value
                      : prevState.currentValue + value,
                shouldReset: false,
            }));
        }
    };

    render() {
        return (
            <div className="calculator">
                <Result value={this.state.currentValue} />
                <Operation onClick={this.handleButtonClick} />
            </div>
        );
    }
}

export default Calculator;