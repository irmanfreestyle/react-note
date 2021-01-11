import React from 'react';
import ModalSlot from './slots/ModalSlot';
import moment from 'moment';

export default function DetailNoteView(props) {

  let toDate = (timeStamp) => {
    return moment.unix(timeStamp).format('DD MMMM YYYY . HH:mm');
  };

  let {
    title,
    content,
    labels,
    pinned,
    createdAt,
    updatedAt
  } = props.note;

  function createMarkup(el) {
    let result = el.replace(/\r?\n/g, '<br />');
    return {__html: result};
  }

  let Content = () => {
    return (
      <>
        <div
          style={{
            fontSize: '13px',
            minHeight: '100px'
          }}
        >
          <div dangerouslySetInnerHTML={createMarkup(content)} />
        </div>
      </>
    )
  };

  return (
    <ModalSlot
      header={<h3>{title}</h3>}
      content={<Content />}
      actions={
        <div
          style={{
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              fontSize: '10px',
              display: 'flex',
              color: 'grey',
              flexDirection: 'column'
            }}
          >
            <div>
              Created at {toDate(createdAt)}
            </div>
            {
              !updatedAt ? '' : (
                <div>
                  Updated at {toDate(updatedAt)}
                </div>
              )
            }
          </div>
          <button
            className="btn-main"
            onClick={props.close}
          >
            Close
          </button>
        </div>
      }
    />
  )
};