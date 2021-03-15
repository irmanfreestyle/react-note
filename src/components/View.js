import React from 'react';
import Icon from '../components/Icon'
import Main from '../pages/Main'
import Label from '../pages/Label'
import {useDispatch, useSelector} from 'react-redux'
import {showCreate, searchNotes, setMobile} from '../actions/noteActions'
import Alert from './reuseable/Alert'
import AddNoteButton from './AddNoteButton';

import {
  Switch,
  Route,
} from "react-router-dom";

export default function View() {

  const dispatch = useDispatch()
  const search = function (event) {
    dispatch(searchNotes(event.target.value))
  }
  let isMobile = useSelector(state => state.notes.isMobile)

  return (
    <>
      <Alert />
      <AddNoteButton />

      <div className="view">
        <div className="view-searchbar">
          <div>
            <Icon>search</Icon> &nbsp;
            <input
              type="text"
              placeholder="Search notes..."
              onInput={search}
            />
          </div>
          {
            window.innerWidth > 835? '' :
            (
              <div className="toggleMenu" onClick={() => dispatch(setMobile(!isMobile))}>
                <Icon>menu</Icon>
              </div>
            )
          }

        </div>

        <div className="view-container">
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
    </>
  )
}