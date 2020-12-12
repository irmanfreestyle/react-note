import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../components/Card';

import {useParams} from "react-router-dom";

export default function Label() {
  const notes = useSelector(state => state.notes.notes);
  let searchKeyword = useSelector(state => state.notes.searchKeyword);
  let {label} = useParams()

  let filterNotes = (notes) => {
    return notes.filter(note => note.labels.includes(label))
    .filter(note =>
      (note.title.includes(searchKeyword))  ||
      (note.labels.includes(searchKeyword)) ||
      (note.content.includes(searchKeyword))
    )
  }

  return (
    <>
      <div className="main-page">
        {
          filterNotes(notes).map((note, idx) => (
            <Card note={note} key={idx} />
          ))
        }
      </div>
    </>
  )
}