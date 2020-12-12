import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showCreate, createNote} from '../actions/noteActions';
import moment from 'moment';

export default function CreateNote () {
  let [title, setTitle] = useState('');
  let [labels, setLabels] = useState('');
  let [content, setContent] = useState('');
  let [pinned, setPinned] = useState('');

  let dispatch = useDispatch();

  let addNote = () => {
    let payload = {
      title,
      labels: labels.split(',').map(item => item.trim()),
      content,
      pinned,
      createdAt: moment().format('X')
    };

    dispatch(createNote(payload));
    dispatch(showCreate(false));
  }

  const isEdit = useSelector(state => state.notes.isEdit);
  const editData = useSelector(state => state.notes.selectedNote);
  function initAction (setTitle) {
    if (isEdit) {
      // let {
      //   title,
      //   labels,
      //   content,
      //   pinned
      // } = editData;

      // console.log(title)

      setTitle(editData.title);
      // setLabels(editData.labels);
      // setContent(editData.content);
      // setPinned(editData.pinned);
      console.log('IS EDIT')
    } else {
      console.log('IS CREATE')
    }
  };

  useEffect(() => {
    initAction(setTitle);
  });

  return (
    <div className="create-note-overlay">
      <div className="form-card">
        <h3>Create a note</h3>
        <br />
        <div className="form">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Label"
            onChange={(e) => setLabels(e.target.value)}
          />
          <textarea
            rows="5"
            placeholder="Write something here..."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <input
            type="checkbox"
            id="pin"
            onChange={(e) => setPinned(e.target.checked)}
          />
          <label htmlFor="pin">
            Pin this note
          </label>
          <br /> <br/>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button className="btn-danger" onClick={() => dispatch(showCreate(false))}>Cancel</button> &nbsp;
            <button
              className="btn-main"
              onClick={addNote}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}