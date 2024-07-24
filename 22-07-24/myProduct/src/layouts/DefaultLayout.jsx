import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";


function DefaultLayout() {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default DefaultLayout