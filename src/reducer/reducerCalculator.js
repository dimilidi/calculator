import { ACTIONS } from "../constants/constants";
import { evaluate } from "../evaluator/evaluate";


export function reducerCalculator(state, {type, payload}) {
    switch(type) {
        case ACTIONS.ADD_DIGIT: 
            if (state.overwrite) {
                return {
                    ...state, 
                    currentOperand: payload.digit, 
                    overwrite: false
                }
            };
            if (payload.digit === '0' && state.currentOperand === '0') return state;
            if (payload.digit === '.' && String(state.currentOperand).includes('.')) return state;
            if (payload.digit === '.' && state.currentOperand == null) return state;

            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }

        case ACTIONS.CHOOSE_OPERATION:
            if(state.currentOperand == null && state.previousOperand == null) {
                return state
            } 

            if (state.currentOperand == null) {
                return {
                    ...state, 
                    operation: payload.operation,
                }
            }

            if ( state.previousOperand == null) {
                return {
                    ...state, 
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null
                }
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand:null
            }


        case ACTIONS.CLEAR:
            return {
                ...state,
                currentOperand: null, 
                previousOperand: null, 
                operation: null
            }

        case ACTIONS.CHANGE_SIGN:
            if (state.currentOperand > 0) {
                return {...state, currentOperand:  -(state.currentOperand)}
            } else {
                return {...state, currentOperand:  Math.abs(state.currentOperand)}
            }
        

        case ACTIONS.EVALUATE:
            if (
                state.operation == null || 
                state.currentOperand == null || 
                state.previousOperand == null
            ) {
                return state
            }

            return {
                ...state,
                overwrite: true,
                previousOperand: null, 
                operation: null,
                currentOperand: evaluate(state)
            }

        default:
        break
    }
}
