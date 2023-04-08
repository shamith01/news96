import React from 'react'
import styles from '../styles/contact.module.css'

function contact() {
  return (
    <div className={styles.main}>
     <div>
      <input className={styles.name} type="text" placeholder='Enter name' required />
     </div>
     <div>
      <input className={styles.name} type="email" placeholder='Enter email' id="e-mail" />
     </div>
     <div >
      <textarea className={styles.desc}   placeholder='tell us about your issue' cols="30" rows="3"></textarea>
     </div>
     
      <button>submit</button>
     
    </div>
  )
}

export default contact
