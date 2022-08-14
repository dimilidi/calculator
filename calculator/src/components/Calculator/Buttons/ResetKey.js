import React from 'react'
import {ACTIONS} from '../../../constants/constants';


export function ResetKey({dispatch, symbol}) {
  return (
    <button onClick={() => dispatch({type: ACTIONS.CLEAR})}>{symbol}</button>
  )
}

