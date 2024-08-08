import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import HomePage from "../pages/HomePage/HomePage";
import ProductListingPage from "../pages/productListingPage/ProductListingPage";
import ProductDetails from "../components/productDetails/ProductDetails";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/projeto-front-end" element={<PageLayout/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/produtos" element={<ProductListingPage/>}/>
                        <Route path="/categorias" element={<ProductDetails/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;