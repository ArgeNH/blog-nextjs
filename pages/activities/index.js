import styles from '../../styles/Activity.module.css'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index';
import Nav from '../../components/navigation/index';

export default function Act() {
    return (
        <>
            <Header/>
            <Nav/>
            <main className={styles.main}>

                <h1>ACTIVITIES 📚</h1>
                <div className='container'>
                    {/*Actividad 1*/}
                    <div className="card">
                        <div className="card-body ">
                            <h4 className={styles.h4}>Activity One</h4><code>(demonstrative video)</code>
                            <div className="row">
                                <div className="col-sm ">

                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hBi9wavp2w4"
                                                allowFullScreen></iframe>

                                    </div>
                                </div>
                                <div className="col-sm">

                                    <div className="card">
                                        <div className="card-header">

                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Title</h5>
                                            <p className="card-text">Text...</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*Actividad 2*/}
                <br/>
                <div className='container'>
                    <div className="card">
                        <div className="card-body ">
                            <h4 className={styles.h4}>Activity Two</h4><code>(demonstrative video)</code>
                            <div className="row">
                                <div className="col-sm ">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/_ZyD4n5zqxA"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                                <div className="col-sm">

                                    <div className="card">
                                        <div className="card-header">
                                            Name of activity (example)
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Title</h5>
                                            <p className="card-text">Text...</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                {/*Actividad 3*/}
                <div className='container'>
                    <div className="card">
                        <div className="card-body ">
                            <h3 className={styles.h3}>Graphic Organizer</h3>
                            <div className="row">
                                <div className="col-sm ">
                                    <div className="text-center">
                                        <img className='rounded img-fluid' src='https://imgur.com/Uf6iDXE.png' alt='graphicOrganizer'/>
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
