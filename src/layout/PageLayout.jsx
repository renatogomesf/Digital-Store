import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const PageLayout = () => {
    return (
        <>
            <Header/>

            <Outlet/>

            <Footer/>
        </>
    );
}
 
export default PageLayout;