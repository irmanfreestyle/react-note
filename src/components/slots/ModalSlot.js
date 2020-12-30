import React from 'react';
import styles from './ModalSlot.module.scss'

export default function ModalSlot({header, actions, content, width}) {
  return (
    <div className={styles.modalOverlay}>
      <div
        className={styles.cardContent}
        style={{
          width: width || '500px'
        }}
      >
        {header}
        <br />
        <div>
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