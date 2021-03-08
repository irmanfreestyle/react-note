// import {notes} from '../dummy';

export const CREATE_NOTE = 'CREATE_NOTE';
export const GET_NOTES = 'GET_NOTES';
export const SHOW_CREATE = 'SHOW_CREATE';
export const SEARCH_NOTES = 'SEARCH_NOTES';
export const SHOW_CREATE_LABEL = 'SHOW_CREATE_LABEL';
export const CREATE_LABEL = 'CREATE_LABEL';
export const GET_LABELS = 'GET_LABELS';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_LABEL = 'DELETE_LABEL';
export const SET_ALERT = 'SET_ALERT';

export const initNotes = () => {
  let notes = localStorage.getItem('react-note');
  return {
    type: GET_NOTES,
    payload: notes ? JSON.parse(notes) : []
  };
}

export const initLabels = () => {
  let labels = localStorage.getItem('react-note-label');
  return {
    type: GET_LABELS,
    payload: labels ? JSON.parse(labels) : []
  };
}

export const createNote = payload => ({
  type: CREATE_NOTE,
  payload
});

export const deleteNote = payload => ({
  type: DELETE_NOTE,
  payload
});

export const showCreate = (status, act, editData) => ({
  type: SHOW_CREATE,
  status,
  act,
  editData
});

export const searchNotes = payload => ({
  type: SEARCH_NOTES,
  payload
});

export const showCreateLabel = payload => ({
  type: SHOW_CREATE_LABEL,
  payload
});

export const createLabel = payload => ({
  type: CREATE_LABEL,
  payload
});

export const deleteLabel = payload => ({
  type: DELETE_LABEL,
  payload
});

export const setAlert = payload => ({
  type: SET_ALERT,
  payload
});