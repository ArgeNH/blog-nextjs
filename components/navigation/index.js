import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Link href='/'><a className="navbar-brand" alt='principal page'>
                    🏠 Go Home
                </a></Link>
            </nav>
        </>
    );
}