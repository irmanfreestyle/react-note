import React, {useEffect, useState} from 'react';
import Icon from '../components/Icon';
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {deleteLabel, initNotes, showCreateLabel} from '../actions/noteActions';
import {menus} from '../dummy';
import ConfirmModal from './slots/ModalSlot';

export default function Sidebar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const labels = useSelector(state => state.notes.labels);
  let [labelTitle, setLabelTitle] = useState('');

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
          onClick={() => {
            dispatch(deleteLabel(labelTitle));
            setDeleteModal(false);
            dispatch(initNotes());
          }}
        >
          Yes, delete it
        </button>
      </>
    )
  };
  let ConfirmModalComponent = () => {
    return !deleteModal ? '' : (
      <ConfirmModal
        header={<h3 className="text-center">Delete this label?</h3>}
        actions={<DeleteActions />}
      />
    )
  };

  // useEffect(() => {
  //   return history.listen((location) => {
  //     console.log(location)
  //   })

  // })

  return (
    <>
      <ConfirmModalComponent />

      <div className="sidebar">
        <div className="sidebar-header">
          REACT NOTE
        </div>
        {
          menus.map(item => (
            <Link to={item.to} key={item.title}>
              <div className="sidebar-item">
                <Icon>{item.icon}</Icon> &emsp;
                {item.title}
              </div>
            </Link>
          ))
        }

        <hr />

        <div className="sidebar-labels">
          {
            labels.map(item => (
              <Link
                className="sidebar-item label"
                key={item.title}
                to={`/label/${item.title}`}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '200px'
                }}>
                  <div className="dot"></div> &emsp;
                  {item.title}
                </div>

                <div onClick={(e) => {
                  e.preventDefault()
                  setDeleteModal(true)
                  setLabelTitle(item.title)
                }}>
                  <Icon className="delete-btn">delete</Icon>
                </div>
              </Link>
            ))
          }
        </div>

        <div
          className="sidebar-item label add-label"
          onClick={() => dispatch(showCreateLabel(true))}
        >
          <Icon>add</Icon>
          Add New Label
        </div>
      </div>
    </>
  )
}