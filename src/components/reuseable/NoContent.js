import React from 'react'
import noteImage from '../../assets/note.svg'

export default function NoContent({label}) {
  let now = new Date()
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let date = now.getDate()
  let day = days[ now.getDay() ];
  let month = months[ now.getMonth() ];
  let year = now.getFullYear()

  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <h3>{label || 'No notes'}</h3>
      <img
        src={noteImage}
        alt="no notes"
        style={{
          width: '300px',
          marginTop: '20px',
          marginBottom: '40px',
        }}
      ></img>
      <h3>
        {day}, {date} {month} {year}
      </h3>
      <div>
        Let's take some notes
      </div>
    </div>
  )
}