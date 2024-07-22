import Section from "../../components/Section/Section";
import ProductListing from '../../components/ProductListing/ProductListing';
import styled from "styled-components";


const ProductListingPage = () => {

    const ProductListingPageComponent = styled.section`
        

    `

    const CamposFiltro = styled.div`
        width: 308px;
        height: 720px;
        background-color: white;
        margin-right: 28px;
        border-radius: 4px;
        box-shadow: 6px 16px 30px rgba(0, 0, 0, 0.05);
    `

    return (
        <ProductListingPageComponent>

            <Section flexDirection = {"row"} titleAlign = {"left"} title={""} link={{text:"", href: ""}}>

                <CamposFiltro></CamposFiltro>

                <ProductListing qtdColuna = {"3"} qtdCards = {"15"} gap = {"14px"}/>

            </Section>
            
        </ProductListingPageComponent>
    );
}
 
export default ProductListingPage;