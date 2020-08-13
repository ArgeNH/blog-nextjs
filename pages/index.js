import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Tab, TabBar } from '@rmwc/tabs'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>English Blog - Arge Niño</title>
        <link rel="icon" href="/icon-arge.ico" />
      </Head>

      <main className={styles.main}>



        <h1 className={styles.title}>
          Welcome to English blog of
          <br /><a href="https://www.instagram.com/arge.nino/">Arge Niño</a>🧑‍💻
        </h1>
        
        <div className={styles.grid}>
         <a href="/activities" className={styles.card}>
            <h3>Activities &rarr;</h3>
            <p>Activities scheduled to upload to the blog.</p>
          </a>

          <a href="/about" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>A brief description and various things. Small projects</p>
          </a>

        </div>

        <iframe width="640" height="480" src="https://www.youtube.com/embed/ut_67JzcQ08" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ArgeNH"
          target="_blank"
          rel="noopener noreferrer">
          Created by{' '}
          <img src="/arge.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
