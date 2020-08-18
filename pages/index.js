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

        <div className={styles.container}>
            <Header/>
            <Nav/>
            <main className={styles.main}>


                <h1 className={styles.title}>
                    Welcome to English blog of
                    <br/><Link href="https://www.instagram.com/arge.nino/"><a target="_blank"
                                                                              rel="noopener noreferrer" title='instagram Arge'>Arge Niño</a></Link>🧑‍💻
                </h1>

                <div className={styles.grid}>
                    <Link href="/activities">
                        <a className={styles.card} title='Click to see activities'><h3>Activities &crarr;</h3>
                            <p>Activities scheduled to upload to the blog.</p></a>
                    </Link>

                    <Link href="/about">
                        <a className={styles.card} title='About me'>
                            <h3>About Me &crarr;</h3>
                            <p>A brief description and various things. Small projects</p>
                        </a>
                    </Link>
                </div>

                <VideoHome/>

            </main>

            <Footer/>
        </div>
    </>
    )
}
