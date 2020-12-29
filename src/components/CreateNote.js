import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showCreate, createNote} from '../actions/noteActions';
import moment from 'moment';
import {uid} from 'uid';

export default function CreateNote () {
  let [title, setTitle] = useState('');
  let [labels, setLabels] = useState('');
  let [content, setContent] = useState('');
  let [pinned, setPinned] = useState('');
  let [createdAt, setCreatedAt] = useState('');
  let [uidNote, setUid] = useState('');

  const isEdit = useSelector(state => state.notes.isEdit);
  let dispatch = useDispatch();

  let addNote = () => {
    let payload = {
      uid: isEdit ? uidNote : uid(10),
      title,
      labels: labels.split(',').map(item => item.trim()),
      content,
      pinned,
      createdAt: !isEdit ? moment().format('X') : createdAt,
      updatedAt: isEdit ? moment().format('X') : '',
      isEdit
    };

    dispatch(createNote(payload));
    dispatch(showCreate(false));
  }

  const editData = useSelector(state => state.notes.selectedNote);
  function initAction () {
    if (isEdit) {
      let {
        uid,
        title,
        labels,
        content,
        pinned,
        createdAt
      } = editData;

      setUid(uid);
      setTitle(title);
      setLabels(labels.join(','));
      setContent(content);
      setPinned(pinned);
      setCreatedAt(createdAt);
    }
  };

  useEffect(() => {
    initAction();
  }, []);

  return (
    <div className="create-note-overlay">
      <div className="form-card">
        <h3>{isEdit ? 'Edit' : 'Create a'} note</h3>
        <br />
        <div className="form">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            placeholder="Label"
            onChange={(e) => setLabels(e.target.value)}
            value={labels}
          />
          <textarea
            rows="5"
            placeholder="Write something here..."
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
          <input
            type="checkbox"
            id="pin"
            onChange={(e) => setPinned(e.target.checked)}
            checked={pinned}
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
              {isEdit ? 'Update note' : 'Create note'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}