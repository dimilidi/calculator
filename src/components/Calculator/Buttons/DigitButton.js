import {ACTIONS} from '../../../constants/constants';
import '../../../App.css'


function DigitButton({dispatch, digit}) {

  return (
    <button 
      className='gray'
      onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>
      {digit}
    </button>
  )
}

export default DigitButton