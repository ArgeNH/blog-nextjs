import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> 🧑‍💻 English Blog - Arge Niño</title>
        <link rel="icon" href="/icon-arge.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to English blog of <a href="https://www.instagram.com/arge.nino/">Arge Niño</a>🧑‍💻
        </h1>
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
