import React from 'react';
import {ACTIONS} from '../../../constants/constants';



export function AuxKey({dispatch, symbol}) {
  return (
    <button onClick={() => dispatch({type: ACTIONS.CHANGE_SIGN,  payload: {symbol}})} >{symbol}</button>
  )
}

