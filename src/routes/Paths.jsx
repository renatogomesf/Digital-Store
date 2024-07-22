import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import HomePage from "../pages/HomePage/HomePage";
import ProductListingPage from "../pages/productListingPage/ProductListingPage";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/produtos" element={<ProductListingPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;