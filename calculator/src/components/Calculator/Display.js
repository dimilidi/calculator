import React from 'react';
import { formatOperand } from '../../formatOperand/formatOperand';


function Display({previousOperand,currentOperand, operation} ) {
    return (
        <div className='output'>
            <div className='previous-operand'>
                {formatOperand(previousOperand)}{operation}
            </div>
            <div className='current-operand'>
                {formatOperand(currentOperand)}
            </div>
        </div>
    )
}

export default Display