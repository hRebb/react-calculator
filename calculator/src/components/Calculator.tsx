import { useState } from "react";
import { Operation } from "./Operation";
import { Result } from "./Result";

export function Calculator() {
    const [result, setResult] = useState<number | null>(null);
    const [operation, setOperation] = useState<string>('');

    const handleOperationChange = (newOperation: string) => {
        setOperation(newOperation);
    };

    const handleResultChange = (newResult: number) => {
        setResult(newResult);
    };

    return (
        <div>
            <Operation onOperationChange={handleOperationChange} />
            <Result operation={operation} onResultChange={handleResultChange} />
        </div>
    )
}