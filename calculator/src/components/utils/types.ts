export interface OperationProps {
    onClick: (value: string) => void;
}

export interface ResultProps {
    value: string;
}

export interface CalculatorState {
    currentValue: string;
    prevValue: string;
    operator: string;
    shouldReset: boolean;
}