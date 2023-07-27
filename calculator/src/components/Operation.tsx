import { ChangeEvent } from "react";

interface OperationProps {
    onOperationChange: (newOperation: string) => void;
}

export function Operation({ onOperationChange } : OperationProps) 
{
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newOperation = event.target.value;
        onOperationChange(newOperation);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="Enter"></input>
        </div>
    )
}