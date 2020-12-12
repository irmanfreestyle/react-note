import React, {useEffect} from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import View from './components/View';
import {initNotes, initLabels} from './actions/noteActions';
import CreateNote from './components/CreateNote';
import CreateLabel from './components/createLabel';
import {useSelector, useDispatch} from 'react-redux';

import {
  BrowserRouter as Router,
} from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initNotes());
    dispatch(initLabels());
  })

  const showCreate = useSelector(state => state.notes.modalCreate);
  const showCreateLabel = useSelector(state => state.notes.modalCreateLabel);

  let CreateNoteModal = () => {
    return showCreate ? <CreateNote /> : '';
  };

  let CreateLabelModal = () => {
    return showCreateLabel ? <CreateLabel /> : '';
  };

  return (
    <Router>
      <div className="app-container">
        <CreateNoteModal />
        <CreateLabelModal />
        <Sidebar />
        <View />
      </div>
    </Router>
  );
}