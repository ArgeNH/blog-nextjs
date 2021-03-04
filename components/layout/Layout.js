import Head from "next/head";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/icon-arge.ico"/>
            </Head>
            <!--Navbar-->
            <div>
                {props.children}
                <style jsx>{`
                  div {
                    margin: 0 auto;
                    max-width: 960px;
                    padding: 0 .8rem;
                  }
                `}</style>
            </div>
            <!-- Footer
            -->
        </div>
    );
}
export default Layout;