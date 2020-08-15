import '../../styles/Home.module.css'
import styles from "../../styles/Home.module.css";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <a
                    href="https://github.com/ArgeNH"
                    target="_blank"
                    rel="noopener noreferrer">
                    Created by{' '}
                    <img src="/arge.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>

        </>

    );
}