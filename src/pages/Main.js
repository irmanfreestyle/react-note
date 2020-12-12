import React from 'react';
import Card from '../components/Card';
import {useSelector} from 'react-redux';
import noteImage from '../assets/note.svg'
import { useParams } from 'react-router-dom';

function Main() {
  let searchKeyword = useSelector(state => state.notes.searchKeyword);
  let notes = useSelector(state => state.notes.notes);
  let now = new Date()
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let date = now.getDay()
  let day = days[ date ];
  let month = months[ now.getMonth() ];
  let year = now.getFullYear()

  let params = useParams();
  let menu = params.menu;

  let Content = () => {
    if (!notes.length) {
      return (
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <img
            src={noteImage}
            alt="no notes"
            style={{
              width: '300px',
              marginTop: '40px',
              marginBottom: '40px',
            }}
          ></img>
          <h3>
            {day}, {date + 1} {month} {year}
          </h3>
          <div>
            Let's take some notes
          </div>
        </div>
      )
    }

    return (
      <div className="main-page">
        {
          notes
          .filter(note => {
            if (menu === undefined || menu === 'all') {
              return (note.title.includes(searchKeyword))  ||
              (note.labels.includes(searchKeyword)) ||
              (note.content.includes(searchKeyword))
            } else if (menu === 'pinned') {
              return ((note.title.includes(searchKeyword))  ||
              (note.labels.includes(searchKeyword)) ||
              (note.content.includes(searchKeyword))) &&
              (note.pinned)
            }
          })
          .map((note, idx) => (
            <Card noteTitle={note.title} note={note} key={idx} />
          ))
        }
      </div>
    )
  }
  return (
    <Content />
  )
}

export default Main