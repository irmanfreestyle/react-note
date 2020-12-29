import React, {useState} from 'react';
import Chip from '../components/Chip'
import moment from 'moment'
import BtnMenu from './reuseable/BtnMenu/BtnMenu'
import {useDispatch} from 'react-redux'
import { deleteNote, showCreate } from '../actions/noteActions';
import ConfirmModal from './slots/ModalSlot';
import Icon from '../components/Icon';
import DetailNoteView from './DetailNoteView';

export default function Card(props) {
  let {note} = props;
  let dispatch = useDispatch();
  let [viewNoteModal, setViewNoteModal] = useState(false);
  let toDate = (timeStamp) => {
    return moment.unix(timeStamp).format('DD MMMM YYYY . HH:mm');
  };

  let [deleteModal, setDeleteModal] = useState(false);
  let DeleteActions = () => {
    return (
      <>
        <button
          className="btn-main"
          onClick={() => setDeleteModal(false)}
        >
          Cancel
        </button>
          &nbsp;
        <button
          className="btn-danger"
          onClick={() => confirmDelete()}
        >
          Yes, delete it
        </button>
      </>
    )
  };
  let ConfirmModalComponent = () => {
    return !deleteModal ? '' : (
      <ConfirmModal
        header={<h3 className="text-center">Delete this note?</h3>}
        actions={<DeleteActions />}
      />
    )
  };

  let DetailNoteModal = () => {
    return !viewNoteModal ? '' : (
      <DetailNoteView
        note={note}
        close={() => setViewNoteModal(false)}
      />
    )
  };

  let confirmDelete = () => {
    dispatch(deleteNote(note.title))
  };

  return (
    <>
      <ConfirmModalComponent />
      <DetailNoteModal />

      <div className="note-card" onClick={() => setViewNoteModal(true)}>
        {
          !note.pinned ? '' : (
            <div
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-2px',
                color: 'orange',
                transform: 'rotate(20deg)',
                textShadow: '1px 1px 2px grey'
              }}
            >
              <Icon className="fa fa-map-pin"></Icon>
            </div>
          )
        }

        <div className="card-date">
          {toDate(note.createdAt)}
          <BtnMenu>
            <div onClick={() => dispatch(showCreate(true, 'edit', note))}>
              Edit
            </div>
            <div onClick={() => setDeleteModal(true)}>Delete</div>
          </BtnMenu>
        </div>
        <div className="card-title">
          {note.title}
        </div>
        <div className="card-content">
          {note.content}
        </div>
        <div className="card-labels">
          {
            note.labels.map((label, idx) => (
              <Chip key={idx}>{label}</Chip>
            ))
          }
        </div>
      </div>
    </>
  )
}