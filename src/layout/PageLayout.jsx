import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styled from "styled-components";


const PageLayout = () => {

    const PageLayoutComponent = styled.section`

        & .main{
            max-width: 1366px;
            margin: auto;
        }
    `

    return (
        <PageLayoutComponent>
            <Header/>

            <main className="main">
                <Outlet/>
            </main>

            <Footer/>
        </PageLayoutComponent>
    );
}
 
export default PageLayout;