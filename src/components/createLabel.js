import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {showCreateLabel, createLabel} from '../actions/noteActions'
import CreateModal from './slots/ModalSlot';
import moment from 'moment';

export default function CreateLabel () {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const addLabel = () => {
    let payload = {
      title,
      createdAt: moment().format('X')
    };

    dispatch(createLabel(payload));
    dispatch(showCreateLabel(false));
  };

  return (
    <CreateModal
      width="300px"
      header={
        <h3 className="text-center">Create new label</h3>
      }
      content={
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      }
      actions={
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <button className="btn-danger" onClick={() => dispatch(showCreateLabel(false))}>Cancel</button> &nbsp;
          <button
            className="btn-main"
            onClick={addLabel}
          >
            Create
          </button>
        </div>
      }
    />
  );
}