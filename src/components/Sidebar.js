import React, {useEffect, useState} from 'react';
import Icon from '../components/Icon';
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {deleteLabel, initNotes, showCreateLabel, setAlert, setMobile} from '../actions/noteActions';
import {menus} from '../dummy';
import ConfirmModal from './slots/ModalSlot';
import styles from '../scssModules/sidebar.module.scss'

export default function Sidebar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const labels = useSelector(state => state.notes.labels)
  let isMobile = useSelector(state => state.notes.isMobile)
  let [labelTitle, setLabelTitle] = useState('')

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
            dispatch(setAlert({
              status: true,
              alertType: 'success',
              alertText: 'Label deleted'
            }))
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

  const detectMobile = () => {
    if (window.innerWidth <= 835) {
      dispatch(setMobile(true))
    } else {
      dispatch(setMobile(false))
    }
  }

  useEffect(() => {
    detectMobile()

    window.addEventListener('resize', function() {
      detectMobile()
    })
  }, [])

  return (
    <>
      <ConfirmModalComponent />

      {
        window.innerWidth > 835 || isMobile ? '' : (
          <div className={styles.sidebarOverlay} onClick={() => dispatch(setMobile(true))} />
        )
      }

      <div className={`${styles.sidebar} ${styles.sidebarMobile} ${!isMobile ? styles.openSidebar : ''}`}>
        <div className={styles.sidebarHeader}>
          REACT NOTE
        </div>
        {
          menus.map(item => (
            <Link to={item.to} key={item.title}>
              <div className={styles.sidebarItem}>
                <Icon>{item.icon}</Icon> &emsp;
                {item.title}
              </div>
            </Link>
          ))
        }

        <hr />

        <div className={styles.sidebarLabels}>
          {
            labels.map(item => (
              <Link
                className={`${styles.sidebarItem} ${styles.label}`}
                key={item.title}
                to={`/label/${item.title}`}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '200px'
                }}>
                  <div className={styles.dot}></div> &emsp;
                  {item.title}
                </div>

                <div onClick={(e) => {
                  e.preventDefault()
                  setDeleteModal(true)
                  setLabelTitle(item.title)
                }}>
                  <Icon className={styles.deleteBtn}>delete</Icon>
                </div>
              </Link>
            ))
          }
        </div>

        <div
          className={`${styles.sidebarItem} ${styles.label}`}
          onClick={() => dispatch(showCreateLabel(true))}
        >
          <Icon>add</Icon>
          Add New Label
        </div>
      </div>
    </>
  )
}