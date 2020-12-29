import React from 'react';

export default function ConfirmModal({header, actions, content}) {
  return (
    <div className="create-note-overlay">
      <div
        className="form-card"
      >
        {header}
        <br />
        <div className="form">
          <div
            style={{
              maxHeight: '400px',
              overflowY: 'auto'
            }}
          >
            {content}
          </div>
          <div
            style={{
              textAlign: 'center',
              paddingTop: '10px'
            }}
          >
            {actions}
          </div>
        </div>
      </div>
    </div>
  )
};