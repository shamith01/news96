import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.main}>
        <Link className={styles.txt} href='/privacy'>Privacy policy</Link>
        <Link className={styles.txt} href="/contact">Contact_Us</Link>
      
    </div>
  )
}

export default Footer
