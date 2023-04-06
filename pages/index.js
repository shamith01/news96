import React from 'react'
import styles from '../styles/index.module.css'
import Image from 'next/image'
import {indexp1,indext1,indexd1,    
  // `indexp2,indext2,indexd2,
  // indexp3,indext3,indexd3,
  // indexp4,indext4,indexd4,
  // indexp5,indext5,indexd5,
  // indexp6,indext6,indexd6,
  // indexp7,indext7,indexd7,
  // indexp8,indext8,indexd8,`
} from '../contents/indexc'

function index() {
  return (
  <>
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={indexp1}  alt={'hlo'} /> 
          
      </div>
      <div className={styles.info}>
        <h2>{indext1}</h2>
      </div>
      <div className={styles.desc}>
        <p>{indexd1}</p>
      </div>
    </div>
{/* 
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={indexp2} />
      </div>
      <div className={styles.info}>
        <h2>{indext2}</h2>
      </div>
      <div className={styles.desc}>
        <p>{indexd2}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={indexp3} />
      </div>
      <div className={styles.info}>
        <h2>{indext3}</h2>
      </div>
      <div className={styles.desc}>
        <p>{indexd3}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={indexp4} />
      </div>
      <div className={styles.info}>
        <h2>{indext4}</h2>
      </div>
      <div className={styles.desc}>
        <p>{indexd4}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={indexp5} />
      </div>
      <div className={styles.info}>
        <h2>{indext5}</h2>
      </div>
      <div className={styles.desc}>
        <p>{indexd5}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={indexp6} />
      </div>
      <div className={styles.info}>
        <h2>{indext6}</h2>
      </div>
      <div className={styles.desc}>
        <p>{indexd6}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={indexp7} />
      </div>
      <div className={styles.info}>
        <h2>{indext7}</h2>
      </div>
      <div className={styles.desc}>
        <p>{indexd7}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={indexp8} />
      </div>
      <div className={styles.info}>
        <h2>{indext8}</h2>
      </div>
      <div className={styles.desc}>
        <p>{indexd8}</p>
      </div>
    </div> */}


    
    </>
  )
}

export default index
