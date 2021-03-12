import React from 'react';

export default function Icon({children, className, color}) {
  return (
    <i
      className={className + ' material-icons' || 'material-icons'}
      style={{fontSize: '16px', color: color || ''}}
    >
      {children}
    </i>
  )
}