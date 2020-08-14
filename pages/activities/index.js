import styles from '../../styles/About.module.css'

export default function Act(){
    return (
        <>
        
        <main className={styles.main}>
                <h1>ACTIVITIES 📚</h1>
                <div className='container'>
                    {/*Actividad 1*/}
                    <div class="card">
                        <div class="card-body">
                            <h3>Activity one</h3>
                            <div class="row">
                                <div class="col">
                                    <iframe width="640" height="360" src="https://www.youtube.com/embed/CIpwuvEBiZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                 </div>
                                <div class="col">
                                    <h6>Prueba</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </>
    );
}
