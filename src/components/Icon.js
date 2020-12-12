import React from 'react';

export default function Icon({children, className}) {
  return (
    <i
      className={className + ' material-icons' || 'material-icons'}
      style={{fontSize: '16px'}}
    >
      {children}
    </i>
  )
}