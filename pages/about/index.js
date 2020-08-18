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
                <div className="container">
                    <h1 className={styles.h1}>About me</h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm text-justify">
                            <img height='160' width='160' src='https://imgur.com/hpCLJdQ.png' className='rounded-circle'
                                 title="Arge's photo"/>
                        </div>
                        <div className="col-sm">
                            <h4 className={styles.h4}>Hi, I am Arge Darley Niño Vianchá</h4>
                            <p className={styles.p}>
                                I am studying Systems and Computing Engineering at the Technological
                                and Pedagogical University of Colombia. I am 20 years old. <br/>
                            </p>
                        </div>
                    </div>
                    <div className="row-cols-sm-1">

                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}