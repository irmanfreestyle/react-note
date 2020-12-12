import React from 'react';
import Icon from '../components/Icon'
import Main from '../pages/Main'
import Label from '../pages/Label'
import {useDispatch} from 'react-redux'
import {showCreate, searchNotes} from '../actions/noteActions'

import {
  Switch,
  Route,
} from "react-router-dom";

export default function View() {

  let dispatch = useDispatch()
  let openCreateModal = () => {
    dispatch(showCreate(true, 'create'))
  }
  let search = function (event) {
    dispatch(searchNotes(event.target.value))
  }

  return (
    <div className="view">
      <div className="view-searchbar">
        <Icon>search</Icon> &nbsp;
        <input
          type="text"
          placeholder="Search notes..."
          onInput={search}
        />
      </div>

      <div className="view-container">
        <div className="mini-label-container">
          <button className="add-note-btn" onClick={openCreateModal}>
            <Icon>add</Icon>
            add new note
          </button>
        </div>

        <Switch>
          <Route exact path="/:menu?">
            <Main />
          </Route>
          <Route exact path="/label/:label">
            <Label />
          </Route>
        </Switch>
      </div>
    </div>
  )
}