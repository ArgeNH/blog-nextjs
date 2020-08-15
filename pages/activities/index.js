import styles from '../../styles/About.module.css'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index';
import Nav from '../../components/navigation/index';

export default function Act() {
    return (
        <>
            <Nav/>

            <Header/>

            <main className={styles.main}>
                <h1>ACTIVITIES 📚</h1>
                <div className='container'>
                    {/*Actividad 1*/}
                    <div class="card">
                        <div class="card-body ">
                            <h3>Activity One</h3>
                            <div class="row">
                                <div class="col-sm ">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hBi9wavp2w4"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-header">
                                            Name of activity
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Title</h5>
                                            <p class="card-text">Text...</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
