import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {setAlert} from '../../actions/noteActions';


export default function Alert ({text, type}) {
  let isAlert = useSelector(state => state.notes.alert);
  let dispatch = useDispatch();

  let close = () => {
    dispatch(setAlert(false))
  }

  if (isAlert) {
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
            background: type === 'success' ? 'green' : 'red',
            color: 'white',
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            { text }
          </div>

          <button
            className="btn-danger"
            onClick={close}
          >
            close
          </button>
        </div>
      </div>
    )
  } else {
    return ''
  }
}