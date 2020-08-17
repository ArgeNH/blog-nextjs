import Link from 'next/link'
import Styles from '../../styles/Navigation.module.css'

export default function Nav() {
    return (
        <>
            <div className={Styles.div}>
                <nav className="navbar fixed-top navbar-light">
                    <div className='container'>

                        <Link href='/'><a className="navbar-brand" title='Principal page' alt='principal page'>
                            🏠 Home
                        </a>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}