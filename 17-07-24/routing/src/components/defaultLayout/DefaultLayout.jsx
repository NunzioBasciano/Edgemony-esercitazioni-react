import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from './defaultLayout.module.css'



function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className={styles.content}>
                <Outlet /> {/* Funziona come i children */}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout