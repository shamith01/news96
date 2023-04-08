import React from 'react'
import Head from 'next/head'
import styles from '../styles/index.module.css'
import Image from 'next/image'
import {politicsp1,politicst1,politicsd1,} from '../contents/politicsc'
  

function politics() {
  return (
    <>
    <Head>
      <title>politics || news96</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="description" content="get latest news update about indian politics,g20 summit" />
      <meta name="keywords" content="politics,indian politicians,indian politics,politics india,BJP,bjp,Congress,Indian elections,indian elections,election,voting,aap,aam admi party,news96,news96.tech" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4700790597407744"
     crossorigin="anonymous"></script>
    </Head>
    
    <div className={styles.main}>
      <div className={styles.image}>
         <img className={styles.img} src={politicsp1}  alt={'hi'} />
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
