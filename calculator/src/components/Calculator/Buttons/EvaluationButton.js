import React from 'react';
import{ACTIONS} from '../../../constants/constants'


function EvaluationButton({symbol, dispatch}) {
  return (
    <button  className=' orange span-two' onClick={() => dispatch({type: ACTIONS.EVALUATE})}>{symbol}</button>
  )
}

export default EvaluationButton