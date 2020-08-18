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

            <div className={styles.main}>
                <div className="container">
                    <h1 className={styles.h1}>About me 👀</h1>
                    <br/>
                    <div className="row">
                        <div className="col-sm text-justify">
                            <br/>
                            <img height='160' width='160' src='https://imgur.com/hpCLJdQ.png' className='rounded-circle'
                                 title="Arge's photo"/>
                            <br/>
                        </div>
                        <div className="col-sm">
                            <br/>
                            <h4 className={styles.h4}>Hi, I am Arge Darley Niño Vianchá</h4>
                            <p className={styles.p}>
                                I am studying Systems and Computing Engineering at the Technological
                                and Pedagogical University of Colombia. I am 20 years old. <br/>
                            </p>
                        </div>
                    </div>
                    <br/>
                    <div className="row-cols-sm-1">
                        <div className={styles.p}>
                            <p>
                                I am currently in sixth semester, I really like watching anime and playing video games. 👾
                            </p>
                            <p>
                                I really like cats, for now I have 4 of them. 🐱
                            </p>
                            <p>
                                One of my projects is to create my own personal web page, using different technologies
                                that integrate web development. I would also like to learn more programming languages, especially web.
                            </p>
                            <p>
                                This website was made with the React framework ⚛,
                                <Link href='https://nextjs.org/'><a target="_blank" rel="noopener noreferrer"> Next.js</a></Link>.<br/>
                                <h6 className={styles.h6}>Created and programmed by me.<br/></h6>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}