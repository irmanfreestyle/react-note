import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../components/Card';
import NoContent from '../components/reuseable/NoContent';
import {useParams} from "react-router-dom";
import Chip from '../components/Chip';

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

  let LabelContent = () => {
    return (
      <div
        className="text-center"
      >
        There are no notes on the <Chip>{label}</Chip> label
      </div>
    )
  };

  return (
    <>
      <div className="main-page">
        {
          filterNotes(notes).map((note, idx) => (
            <Card note={note} key={idx} />
          ))
        }
      </div>
      {
        filterNotes(notes).length ? '' : (
          <NoContent
            label={<LabelContent />}
          />
        )
      }
    </>
  )
}