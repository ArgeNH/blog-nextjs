import Link from 'next/link';
import styles from '../../styles/VideoHome.module.css'

export default function VideoHome() {
    return (
        <>
        <div className='container rounded '>
            <h2 className={styles.h2}>Welcome Video 👋</h2>
            <div>
                <div className="embed-responsive embed-responsive-16by9 rounded">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hBi9wavp2w4"
                            allowFullScreen></iframe>
                </div>
                <br/>
            </div>
        </div>
        </>
    );
}