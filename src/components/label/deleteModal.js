import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteLabel, initNotes } from '../../actions/noteActions';

export default function DeleteModal({close, labelTitle}) {

  const dispatch = useDispatch();

  return (
    <div className="create-note-overlay">
      <div className="form-card">
        <h3>Delete this label?</h3>
        <br />
        <div className="form">
          <div
            style={{textAlign: 'center'}}
          >
            <button
              className="btn-main"
              onClick={() => close()}
            >
              Cancel
            </button>
             &nbsp;
            <button
              className="btn-danger"
              onClick={() => {
                dispatch(deleteLabel(labelTitle));
                close();
                dispatch(initNotes());
              }}
            >
              Yes, delete it
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};