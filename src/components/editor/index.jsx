import React from 'react'
import styles from './Editor.module.css'
import Kbd65 from './kbd-65'

const Editor = () => {
  return (
    <div className={styles.editor}>
    <div className={styles.fluidcontainer}>
    <div className={styles.frame}>
      <div className={styles.flex}>
        <div className={styles.flex1}>
          <Kbd65/>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}



export default Editor