import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/index'
import Header from '../components/header/index'
import VideoHome from "../components/video/index";
import {Tab, TabBar} from '@rmwc/tabs'
import Nav from "../components/navigation";

export default function Home() {
    return (
        <>
        <Nav/>
        <div className={styles.container}>
            <Header/>

            <main className={styles.main}>


                <h1 className={styles.title}>
                    Welcome to English blog of
                    <br/><Link href="https://www.instagram.com/arge.nino/"><a target="_blank"
                                                                              rel="noopener noreferrer">Arge Niño</a></Link>🧑‍💻
                </h1>

                <div className={styles.grid}>
                    <Link href="/activities">
                        <a className={styles.card}><h3>Activities &crarr;</h3>
                            <p>Activities scheduled to upload to the blog.</p></a>
                    </Link>

                    <Link href="/about">
                        <a className={styles.card}>
                            <h3>About Me &crarr;</h3>
                            <p>A brief description and various things. Small projects</p>
                        </a>
                    </Link>
                </div>

                <VideoHome/>

                {/* <div className={styles.containe}>
                    <p>
                        The content of this blog is absolutely educational,<br/>
                        corresponding to the English V subject at the University.<br/>
                        <h3>Welcome Video</h3>
                    </p>
                </div>*/}

            </main>

            <Footer/>
        </div>
    </>
    )
}
