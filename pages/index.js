import React from 'react'
import styles from '../styles/index.module.css'
import Image from 'next/image'
import Head from 'next/head'
import {indexp1,indext1,indexd1,    
  indexp2,indext2,indexd2,
  indexp3,indext3,indexd3,
  indexp4,indext4,indexd4,
  indexp5,indext5,indexd5,
  indexp6,indext6,indexd6,
  indexp7,indext7,indexd7,
  indexp8,indext8,indexd8,
} from '../contents/indexc'

function index() {
  return (
    <>
    <Head>
      <title>news96</title>
      <meta name="description" content="get updated with the latest news" />
      <meta name="keywords" content="trending news,accident news,ipl ,cricket,vollyball news,live karnataka,news96,news96.tech" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4700790597407744"
     crossorigin="anonymous"></script>
    </Head>
    <div className={styles.main}>
      <div className={styles.info}>
        <h1>{indext1}</h1>
      </div>
      <div className={styles.image}>
        <img className={styles.img} src={indexp1}  alt={'img'} /> 
          
      </div>
      <div className={styles.desc}>
        <p>{indexd1}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.info}>
        <h2>{indext2}</h2>
      </div>
      <div className={styles.image}>
        <img className={styles.img} src={indexp2} alt={'img'}/>
      </div>
      <div className={styles.desc}>
        <p>{indexd2}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.info}>
        <h2>{indext3}</h2>
      </div>
      <div className={styles.image}>
        <img className={styles.img} src={indexp3} alt={'img'}/>
      </div>
      <div className={styles.desc}>
        <p>{indexd3}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.info}>
        <h2>{indext4}</h2>
      </div>
      <div className={styles.image}>
        <img className={styles.img} src={indexp4} alt={'img'} />
      </div>
      <div className={styles.desc}>
        <p>{indexd4}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.info}>
        <h2>{indext5}</h2>
      </div>
      <div className={styles.image}>
        <img className={styles.img} src={indexp5} alt={'img'}/>
      </div>
      <div className={styles.desc}>
        <p>{indexd5}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.info}>
        <h2>{indext6}</h2>
      </div>
      <div className={styles.image}>
        <img className={styles.img} src={indexp6} alt={'img'}/>
      </div>
      <div className={styles.desc}>
        <p>{indexd6}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.info}>
        <h2>{indext7}</h2>
      </div>
      <div className={styles.image}>
        <img className={styles.img} src={indexp7} alt={'img'}/>
      </div>
      <div className={styles.desc}>
        <p>{indexd7}</p>
      </div>
    </div>

    <div className={styles.main}>
      <div className={styles.info}>
        <h2>{indext8}</h2>
      </div>
      <div className={styles.image}>
        <img className={styles.img} src={indexp8} alt={'img'}/>
      </div>
      <div className={styles.desc}>
        <p>{indexd8}</p>
      </div>
    </div>


    
    </>
  )
}

export default index
