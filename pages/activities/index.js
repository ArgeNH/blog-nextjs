import styles from '../../styles/Activity.module.css'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index';
import Nav from '../../components/navigation/index';
import Acts from "../../components/act/index";


export default function Act() {
    return (
        <>
            <Header/>
            <Nav/>
            <Acts/>
            <Footer/>
        </>
    )
        ;
}
