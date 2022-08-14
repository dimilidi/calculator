import React, { useReducer } from "react";
import {reducerCalculator} from '../../reducer/reducerCalculator';
import Display from "./Display";
import {ResetKey} from './Buttons/ResetKey';
import { AuxKey } from "./Buttons/AuxKey";
import DigitButton from './Buttons/DigitButton';
import OperationButton from './Buttons/OperationButton';
import EvaluationButton from "./Buttons/EvaluationButton";
import "../../App.css";


export default function Calculator() {

    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducerCalculator, {});

    return (
        <div className="calculator-grid">
            <Display previousOperand = {previousOperand} currentOperand = {currentOperand} operation = {operation} />
            <ResetKey symbol= 'C' dispatch = {dispatch} />
            <AuxKey symbol = '+/-' dispatch = {dispatch} />
            <OperationButton  operation='%' dispatch = {dispatch} />
            <OperationButton className='none' operation='÷' dispatch = {dispatch} />
            <DigitButton digit='7' dispatch = {dispatch} />
            <DigitButton  digit='8' dispatch = {dispatch} />
            <DigitButton  digit='9' dispatch = {dispatch} />
            <OperationButton  operation='*' dispatch = {dispatch} />
            <DigitButton  digit='4' dispatch = {dispatch} />
            <DigitButton  digit='5' dispatch = {dispatch} />
            <DigitButton  digit='6' dispatch = {dispatch} />
            <OperationButton   operation='–' dispatch = {dispatch} />
            <DigitButton digit='1' dispatch = {dispatch} /> 
            <DigitButton  digit='2' dispatch = {dispatch} />
            <DigitButton  digit='3' dispatch = {dispatch} />
            <OperationButton  operation='+' dispatch = {dispatch} />
            <DigitButton  digit='0' dispatch = {dispatch} />
            <DigitButton  digit='.' dispatch = {dispatch} />
            {/* <button style={{ visibility: "hidden" }}>
            ,
            </button> */}
            <EvaluationButton symbol = '=' dispatch = {dispatch}/>
            
        </div>
        
    );
}

