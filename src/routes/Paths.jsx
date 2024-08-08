import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import HomePage from "../pages/HomePage/HomePage";
import ProductListingPage from "../pages/productListingPage/ProductListingPage";
import ProductDetails from "../components/productDetails/ProductDetails";
import NotFound from "../pages/notFound/NotFound";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/projeto-front-end" element={<PageLayout/>}>
                        <Route path="/projeto-front-end" element={<HomePage/>}/>
                        <Route path="/projeto-front-end/produtos" element={<ProductListingPage/>}/>
                        <Route path="/projeto-front-end/categorias" element={<ProductDetails/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;