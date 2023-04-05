import React from 'react'
import styles from '../styles/home.module.css'
import {politicsp1,politicst1,politicsd1,} from '../pages/contents/politicsc'
  

function politics() {
  return (
    <>
    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={politicsp1} />
      </div>
      <div className={styles.info}>
        <h2>{politicst1}</h2>
      </div>
      <div className={styles.desc}>
        <p>{politicsd1}</p>
      </div>
    </div>

{/*     
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={politicsp2} />
      </div>
      <div className={styles.info}>
        <h2>{politicst2}</h2>
      </div>
      <div className={styles.desc}>
        <p>{politicsd2}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={politicsp3} />
      </div>
      <div className={styles.info}>
        <h2>{politicst3}</h2>
      </div>
      <div className={styles.desc}>
        <p>{politicsd3}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={politicsp4} />
      </div>
      <div className={styles.info}>
        <h2>{politicst4}</h2>
      </div>
      <div className={styles.desc}>
        <p>{politicsd4}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={politicsp5} />
      </div>
      <div className={styles.info}>
        <h2>{politicst5}</h2>
      </div>
      <div className={styles.desc}>
        <p>{politicsd5}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={politicsp6} />
      </div>
      <div className={styles.info}>
        <h2>{politicst6}</h2>
      </div>
      <div className={styles.desc}>
        <p>{politicsd6}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={politicsp7} />
      </div>
      <div className={styles.info}>
        <h2>{politicst7}</h2>
      </div>
      <div className={styles.desc}>
        <p>{politicsd7}</p>
      </div>
    </div>

    
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={politicsp8} />
      </div>
      <div className={styles.info}>
        <h2>{politicst8}</h2>
      </div>
      <div className={styles.desc}>
        <p>{politicsd8}</p>
      </div>
    </div>
     */}
    </>
  )
}

export default politics
