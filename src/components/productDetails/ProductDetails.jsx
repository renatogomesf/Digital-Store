import BuyBox from "../buyBox/BuyBox";
import Gallery from "../gallery/Gallery";
import Section from './../Section/Section';
import ProductListing from "../ProductListing/ProductListing";

import { ProductDetailsComponent } from "./ProductDetailsStyle";
import { useParams } from "react-router-dom";


const ProductDetails = () => {

    const {name, imageQuery, price, priceDiscount} = useParams()

    const infoProduto = {
        name,
        imageQuery,
        price,
        priceDiscount
    }
    
   const baseURL = "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/"
    
    const slide = [
        {src: baseURL + imageQuery},
        {src: baseURL + imageQuery},
        {src: baseURL + imageQuery},
        {src: baseURL + imageQuery},
        {src: baseURL + imageQuery},
    ]

    return (
        <ProductDetailsComponent>
            <div className="produto">

                <p className="navegacao">Home / Produtos / Tênis / Nike / {name}</p>

                <div className="produtoDetalhe">
                    <div className="galeria">
                        <Gallery slide={slide} display={"none"} pagination = {false} navigation = {true}/>
                        <div className="rodape">
                            {
                                slide.map((item)=>{
                                    return <img className="imgMenor" src={item.src} alt="imagem produto" />
                                })
                            }
                        </div>
                    </div>

                    <BuyBox infoProduto={infoProduto}/>
                </div>

            </div>
            
            <Section flexDirection = {"column"} titleAlign = {"left"} title={"Produtos Relacionados"} link={{text:"Ver todos", to: "/produtos"}}>
                <ProductListing qtdColuna = {"4"} qtdCards = {"4"} gap = {"24px"}/>
            </Section>

        </ProductDetailsComponent>
    );
}
 
export default ProductDetails;
