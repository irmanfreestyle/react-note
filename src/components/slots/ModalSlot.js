import React from 'react';

export default function ConfirmModal({header, actions}) {
  return (
    <div className="create-note-overlay">
      <div className="form-card">
        {header}
        <br />
        <div className="form">
          <div
            style={{textAlign: 'center'}}
          >
            {actions}
          </div>
        </div>
      </div>
    </div>
  )
};