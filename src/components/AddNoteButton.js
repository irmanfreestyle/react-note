import React from 'react'
import styles from '../scssModules/addButton.module.scss'
import Icon from '../components/Icon'
import {showCreate} from '../actions/noteActions'
import { useDispatch } from 'react-redux'

export default function AddNoteButton () {
  const dispatch = useDispatch()
  const openCreateModal = () => {
    dispatch(showCreate(true, 'create'))
  }

  return (
    <div className={styles.addButton} onClick={openCreateModal}>
      <Icon>add</Icon>
    </div>
  )
}