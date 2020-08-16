import styles from "../../styles/Home.module.css";
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                Copyright © 2020 -
                <Link href="https://github.com/ArgeNH"><a

                    target="_blank"
                    rel="noopener noreferrer" title='GitHub Arge Niño'>
                    Created by{' '}
                    <img src="/arge.svg" alt="Vercel Logo" className={styles.logo}/>
                </a></Link>
            </footer>

        </>

    );
}