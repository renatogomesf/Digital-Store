import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import HomePage from "../pages/HomePage/HomePage";
import ProductListing from "../pages/ProductListing/ProductListing";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/produtos" element={<ProductListing/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;