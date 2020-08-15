import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <nav className="navbar fixed-top navbar-light bg-light">
                <div className='container'>
                    <Link href='/'><a className="navbar-brand" alt='principal page'>
                        🏠 Go Home
                    </a></Link>
                </div>
            </nav>
        </>
    );
}