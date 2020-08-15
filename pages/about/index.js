import Link from 'next/link'
import styles from '../../styles/About.module.css'
import Footer from '../../components/footer/index'
import Nav from '../../components/navigation/index'
import Header from '../../components/header/index'

export default function Act() {
    return (

        <>
            <Header/>
            <Nav/>

            <main className={styles.main}>
                <div>

                </div>
            </main>

            <Footer/>
        </>
    );
}