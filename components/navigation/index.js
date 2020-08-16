import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <nav className="navbar fixed-top navbar-light bg-light">
                <div className='container'>
                    <Link href='/'><a className="navbar-brand is-active" title='Principal page' alt='principal page'>
                        🏠 Home
                    </a>
                    </Link>
                </div>
            </nav>
        </>
    );
}