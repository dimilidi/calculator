import {ACTIONS} from '../../../constants/constants';


function OperationButton({dispatch, operation}) {

  return (
    <button 
      className = { operation === '%' ?  'none' : 'orange'}
      onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>
      {operation}
    </button>
  )
}

export default OperationButton