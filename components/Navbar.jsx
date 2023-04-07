import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Navbar() {
  return (<>
    <div className={styles.nav}>
      <div className={styles.left}>
        <h1 className={styles.logo}>News96</h1>
      </div>
      <div className={styles.pdiv}>
        <Link className={styles.links} href="/">home</Link>
        <Link className={styles.links} href="/politics">politics</Link>
        <Link className={styles.links} href="/sports">sports</Link>
      
      </div>
    </div>
    <div className={styles.div}>

    </div>
  </>
  )
}

export default Navbar
