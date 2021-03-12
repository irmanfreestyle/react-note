import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {setAlert} from '../../actions/noteActions';
import Icon from '../Icon';


export default function Alert () {
  let isAlert = useSelector(state => state.notes.alert);
  let alertType = useSelector(state => state.notes.alertType)
  let alertText = useSelector(state => state.notes.alertText)
  let dispatch = useDispatch();

  let close = () => {
    dispatch(setAlert({
      status: false
    }))
  }

  if (isAlert) {
    setTimeout(() => {
      close()
    }, 5000)
    return (
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 100
        }}
      >
        <div
          style={{
            minWidth: '300px',
            maxWidth: '100%',
            padding: '10px',
            background: alertType === 'success' ? 'green' : 'red',
            color: 'white',
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            { alertText }
          </div>

          <button
            className="btn-icon"
            onClick={close}
          >
            <Icon className="fa fa-close" color="white"></Icon>
          </button>
        </div>
      </div>
    )
  } else {
    return ''
  }
}