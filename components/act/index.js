import styles from '../../styles/Activity.module.css'

export default function Acts() {
    return (
        <>
            <main className={styles.main}>

                <h1>ACTIVITIES 📚</h1>
                <div className='container'>
                    {/*Actividad 1*/}
                    <div className="card">
                        <div className="card-body ">
                            <h4 className={styles.h4}>Activity One</h4>
                            <div className="row">
                                <div className="col-sm ">

                                    <div className={styles.align}>
                                        <div className="card">
                                            <div className="card-header">
                                                REFLECTIVE WRITING 📃
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">
                                                    🖥 Importance of tecnology in times of quarantine 🦠️
                                                </h4>
                                                <div className={'row'}>
                                                    <div className={'col-sm'}>
                                                        <p className="card-text">
                                                            Technology in recent years, from the 2000s onwards, has
                                                            dramatically influenced the lives of most of the people in
                                                            the world. In this way, it is important to consider the
                                                            benefits of making use of these and also the effects that
                                                            can be generated at a social and psychological level, among
                                                            others. The main theme of this blog, wants to publicize,
                                                            understand and raise awareness of the importance of the use
                                                            of technologies in times of quarantine.
                                                        </p>
                                                        <p className='card-text'>
                                                        </p>
                                                    </div>
                                                    <div className={'col-sm'}>
                                                        <div className={styles.bor}>
                                                            <img className='img-fluid shadow-lg'
                                                                 src='https://imgur.com/wDhtkZz.png'
                                                                 alt='tecnology'/>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
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
                            <h4 className={styles.h4}>Activity Two</h4>
                            <div className="row">
                                <div className="col-sm ">
                                    <div className="embed-responsive embed-responsive-16by9 rounded">
                                        <iframe className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/_ZyD4n5zqxA"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                                <div className="col-sm">

                                    <div className={styles.separator}>
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
                                        <img className='rounded img-fluid' src='https://imgur.com/Uf6iDXE.png'
                                             alt='graphicOrganizer'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );

}