import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer/index'
import Header from '../components/header/index'
import VideoHome from "../components/video/index";
import {Tab, TabBar} from '@rmwc/tabs'
import Nav from "../components/navigation";
import Navbar from "../components/navigation/Navbar";
import Layout from "../components/layout/Layout";

export default function Home() {
    return (
        <Layout title={'Blog'}>
            <VideoHome/>
        </Layout>
    )
}
