import Link from 'next/link';

import styles from './Navbar.module.css';

const Pages = (props) => {
    return (
        <Link href={props.urlName}>
            <a>
                {props.text}
            </a>
        </Link>
    );
}

const Navbar = () => {
    let home = <Pages urlName={'/'} text={'Home 🏠'}/>
    let about = <Pages urlName={'/about'} text={'About 👀'}/>
    let activities = <Pages urlName={'/activities'} text={'Activities 📄'}/>
    return (
        <div className={styles.navbar}>
            <div className={styles.rate}>
                <div className={styles.elements}>
                    <div className={styles.home}>
                        {home}
                    </div>
                    <div className={styles.activities}>
                        {activities}
                    </div>
                    <div className={styles.about}>
                        {about}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;