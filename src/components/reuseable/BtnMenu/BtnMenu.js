import React, {useState} from 'react';
import Icon from '../../Icon'
import styles from './BtnMenu.module.scss'

export default function BtnMenu({children}) {
  let [showMenus, setMenus] = useState(false);

  return (
    <>
      <div
        className={styles.activator}
        onClick={(e) => {
          e.stopPropagation()
          setMenus(!showMenus)
        }}
      >
        <Icon>more_horiz</Icon>
        {
          showMenus ? (
            <div className={styles.menus}>
              {children}
            </div>
          ) : ''
        }
      </div>
    </>
  )
}