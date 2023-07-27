import {
    useState,
    useEffect
} from 'react';

interface ResultProps {
    operation: string;
    onResultChange: (newResult: number) => void;
}

export function Result ({ operation, onResultChange }: ResultProps) {
    const [result, setResult] = useState<number | null>(null);

    useEffect(() => {
        try {
            const evaluatedResult = eval(operation);
            setResult(evaluatedResult);
            onResultChange(evaluatedResult);
        } catch(error) {
            setResult(null);
            onResultChange(NaN);
        }
    }, [operation, onResultChange]);

    return (
        <div>
            <p>
                Result: {
                    result !== null ? result : 'Invalid operation'
                }
            </p>
        </div>
    )
}