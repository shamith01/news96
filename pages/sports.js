import React from 'react'
import styles from '../styles/sports.module.css'
import {sportsp1,sportst1,sportsd1,
  // `sportsp2,sportst2,sportsd2,
  // sportsp3,sportst3,sportsd3,
  // sportsp4,sportst4,sportsd4,
  // sportsp5,sportst5,sportsd5,
  // sportsp6,sportst6,sportsd6,
  // sportsp7,sportst7,sportsd7,
  // sportsp8,sportst8,sportsd8,`
} from '../pages/contents/sportsc'

function sports() {
  return (
    <>
    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={sportsp1} />
      </div>
      <div className={styles.info}>
        <h2>{sportst1}</h2>
      </div>
      <div className={styles.desc}>
        <p>{sportsd1}</p>
      </div>
    </div>

{/*     
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={sportsp2} />
      </div>
      <div className={styles.info}>
        <h2>{sportst2}</h2>
      </div>
      <div className={styles.desc}>
        <p>{sportsd2}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={sportsp3} />
      </div>
      <div className={styles.info}>
        <h2>{sportst3}</h2>
      </div>
      <div className={styles.desc}>
        <p>{sportsd3}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={sportsp4} />
      </div>
      <div className={styles.info}>
        <h2>{sportst4}</h2>
      </div>
      <div className={styles.desc}>
        <p>{sportsd4}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={sportsp5} />
      </div>
      <div className={styles.info}>
        <h2>{sportst5}</h2>
      </div>
      <div className={styles.desc}>
        <p>{sportsd5}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={sportsp6} />
      </div>
      <div className={styles.info}>
        <h2>{sportst6}</h2>
      </div>
      <div className={styles.desc}>
        <p>{sportsd6}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={sportsp7} />
      </div>
      <div className={styles.info}>
        <h2>{sportst7}</h2>
      </div>
      <div className={styles.desc}>
        <p>{sportsd7}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={sportsp8} />
      </div>
      <div className={styles.info}>
        <h2>{sportst8}</h2>
      </div>
      <div className={styles.desc}>
        <p>{sportsd8}</p>
      </div>
    </div>
       */}
    </>
  )
}

export default sports
