import * as actions from '../actions/noteActions'
import {useDispatch} from 'react-redux'

let initialState = {
  modalCreate: false,
  modalCreateLabel: false,
  isEdit: false,
  notes: [],
  labels: [],
  searchKeyword: '',
  selectedNote: {},
  alert: false,
  alertType: '',
  alertText: ''
}

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_NOTES:
      console.log('INIT NOTES');
      state.notes = action.payload;
      return state;

    case actions.CREATE_NOTE:
      let {isEdit, uid} = action.payload

      if (isEdit) {
        let index = state.notes.findIndex(note => note.uid === uid);
        state.notes.splice(index, 1)
      }

      state.notes.unshift(action.payload);

      let noteData = JSON.stringify(state.notes);

      localStorage.setItem('react-note', noteData);
      return state;

    case actions.DELETE_NOTE:
      let index = state.notes.findIndex(note => note.title === action.payload)
      let updatedNotes = [...state.notes];

      updatedNotes.splice(index, 1)
      state.notes = updatedNotes;

      localStorage.setItem('react-note', JSON.stringify(state.notes));

      return state;

    case actions.SHOW_CREATE:
      let {status, act, editData} = action;
      state.modalCreate = status;
      state.isEdit = act === 'edit' ? true : false;
      state.selectedNote = editData;

      return state;

    case actions.SHOW_CREATE_LABEL:
      state.modalCreateLabel = action.payload;
      return state;

    case actions.CREATE_LABEL:
      let labelIsExist = state.labels.find(item => item.title === action.payload.title);

      if (!labelIsExist) {
        state.labels.unshift(action.payload)

        let labelData = JSON.stringify(state.labels)
        localStorage.setItem('react-note-label', labelData)

        state.modalCreateLabel = false
      } else {
        state.alert = true
        state.alertType = 'danger'
        state.alertText = 'Label name is exist'
      }

      return state;

    case actions.GET_LABELS:
      state.labels = action.payload;
      return state;

    case actions.DELETE_LABEL:
      let labelIndex = state.labels.findIndex(label => label.title === action.payload)
      let updatedLabels = [...state.labels];

      updatedLabels.splice(labelIndex, 1)
      state.labels = updatedLabels;

      // DELETE LABEL IN THE NOTE TOO
      let deletedNotesLabel = state.notes;
      deletedNotesLabel.forEach(item => {
        if (item.labels.includes(action.payload)) {
          let idx = item.labels.findIndex(title => title === action.payload);
          item.labels.splice(idx, 1);
        }
      });

      state.notes = deletedNotesLabel;

      localStorage.setItem('react-note', JSON.stringify(state.notes));
      localStorage.setItem('react-note-label', JSON.stringify(state.labels));

      return state;

    case actions.SET_ALERT:
      state.alert = action.payload.status
      state.alertText = action.payload.alertText
      state.alertType = action.payload.alertType

      return state;

    case actions.SEARCH_NOTES:
      state.searchKeyword = action.payload.trim();
      return state;

    default:
      return state
  }
}

export default noteReducer