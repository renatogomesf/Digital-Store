import BuyBox from "../buyBox/BuyBox";
import Gallery from "../gallery/Gallery";
import Section from './../Section/Section';
import ProductListing from "../ProductListing/ProductListing";

import { ProductDetailsComponent } from "./ProductDetailsStyle";

const ProductDetails = () => {

    const slide = [
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-1.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-2.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-3.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-4.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-5.jpeg"},
    ]

    return (
        <ProductDetailsComponent>
            <div className="produto">

                <p className="navegacao">Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</p>

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

                    <BuyBox/>
                </div>

            </div>
            
            <Section flexDirection = {"column"} titleAlign = {"left"} title={"Produtos Relacionados"} link={{text:"Ver todos", to: "/produtos"}}>
                <ProductListing qtdColuna = {"4"} qtdCards = {"4"} gap = {"24px"}/>
            </Section>

        </ProductDetailsComponent>
    );
}
 
export default ProductDetails;
