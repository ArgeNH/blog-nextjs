import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/index'
import Header from '../components/header/index'
import {Tab, TabBar} from '@rmwc/tabs'

export default function Home() {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>


                <h1 className={styles.title}>
                    Welcome to English blog of
                    <br/><a href="https://www.instagram.com/arge.nino/">Arge Niño</a>🧑‍💻
                </h1>

                <div className={styles.grid}>
                    <Link href="/activities">
                        <a className={styles.card}><h3>Activities &rarr;</h3>
                            <p>Activities scheduled to upload to the blog.</p></a>
                    </Link>

                    <Link href="/about">
                        <a className={styles.card}>
                            <h3>About Me &rarr;</h3>
                            <p>A brief description and various things. Small projects</p>
                        </a>
                    </Link>
                </div>


                <div className={styles.containe}>
                    <p>
                        El contenido de este blog es totalmente de tipo educativo,<br/>
                        correspondiente a la materia Ingles V en la Univerdidad.
                    </p>
                </div>

            </main>

            <Footer/>
        </div>
    )
}
