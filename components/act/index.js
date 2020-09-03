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
                            <h4>Activity One</h4>
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
                                                            Why is technology important in times of quarantine? The
                                                            answer to this question is the most viable solution for this
                                                            type of case, since it does not involve physical contact
                                                            between people. With regard to education, it is of great
                                                            use, because it allows continuity to said academic
                                                            activities and interacting with students in a more didactic
                                                            and spontaneous way.
                                                            In relation to the workplace, it is understood that for all
                                                            jobs it is not possible to implement this type of function
                                                            as in education, but several companies that cover the
                                                            technological field benefit in a certain way.
                                                        </p>
                                                        <p>
                                                            A large part of the world population when involved in this
                                                            situation, cannot access these technologies or pedagogical
                                                            tools for reasons of economy. And this generates an
                                                            imbalance in society. There are many risks on the internet,
                                                            more in social networks and those who are most affected are
                                                            children, because they do not know how to handle a situation
                                                            of these, so it is important to know some tips to avoid some
                                                            kind of damage to this small part of the population.
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
                            <h4>Activity Two</h4>
                            <div className="row">
                                <div className="col-sm ">
                                    <div className="embed-responsive embed-responsive-16by9 rounded">
                                        <iframe className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/oozQ4yV__Vw"
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
                            <h3>Graphic Organizer</h3>
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