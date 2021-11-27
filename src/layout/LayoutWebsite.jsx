import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/website/Footer";
import Header from "../pages/website/Header";
import HeaderSort from "../pages/website/HeaderSort";

function LayoutWebsite() {
    return (
        <div>
            <Header />
            <HeaderSort />
            <Outlet />
            <Footer />
        </div>
    );
}
export default LayoutWebsite;