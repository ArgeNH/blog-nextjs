import styles from '../../styles/About.module.css'
import Head from 'next/head'

export default function Act() {
    return (
        <>


            <Head>
                <title>English Blog - Arge Niño</title>
                <link rel="icon" href="/icon-arge.ico" />



            </Head>

            <main className={styles.main}>
                <h1>ACTIVITIES 📚</h1>
                <div className='container'>
                    {/*Actividad 1*/}
                    <div class="card">
                        <div class="card-body ">
                            <h3>Activity One</h3>
                            <div class="row">
                                <div class="col-sm ">
                                    <div class={styles.video_responsive}>
                                        <iframe src="https://www.youtube.com/embed/CIpwuvEBiZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

        </>
    );
}
