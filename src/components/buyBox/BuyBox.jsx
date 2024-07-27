import ProductOptions from "../productOptions/ProductOptions";
import { BuyBoxComponent } from "./BuyBoxStyle";

import { Star } from "./BuyBoxSVG";

const BuyBox = () => {

    const tamanho = [
        {numero:"39"},
        {numero:"40"},
        {numero:"41"},
        {numero:"42"},
        {numero:"43"}
    ]

    const cor = [
        {cor:"#6FEEFF"},
        {cor:"#FF6969"},
        {cor:"#5E5E5E"},
        {cor:"#6D70B7"}
    ]

    const estilos = {
        tamanho: {
            borderRadius: "4px",
            size: "48px",
            sizeAfter: "48px",
            border:"1px",
            corPadrao: "#CCCCCC",
            corChecked: "#C92071",
            outline: "none"
        },

        cor: {
            borderRadius: "50%",
            size: "38px",
            sizeAfter: "",
            border:"2px",
            corPadrao: "#fff",
            corChecked: "#fff",
            outline: ""
        }
    }

    return (
        <BuyBoxComponent>
            <h1 className="titulo">Tênis Nike Revolution 6 Next Nature Masculino</h1>
            <p className="referencia">Casual | Nike | REF:38416711</p>
            <div className="avaliacao">
                <span className="stars">
                    <span className="star"><Star/></span>
                    <span className="star"><Star/></span>
                    <span className="star"><Star/></span>
                    <span className="star"><Star/></span>
                    <span className="star"><Star/></span>
                </span>
                <span className="nota">
                    <p>4.7</p>
                    <span className="starNota"><Star/></span>
                </span>
                <span className="qtdAvaliacao">(90 avaliações )</span>
            </div>

            <div className="preço">
                <span>
                    <span className="sifrao">R$</span>
                    <span className="valorDesconto">219</span>
                    <span className="centavos">,00</span>
                </span>
                <span className="valor">219,00</span>
            </div>

            <div className="descricaoProduto">
                <p className="titulo">Descrição do produto</p>
                <p className="descricao">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
            </div>

            <ProductOptions titulo={"Tamanho"} informacao={tamanho} estilos={estilos.tamanho}/>
            <ProductOptions titulo={"Cor"} informacao={cor} estilos={estilos.cor}/>

            <button className="btnComprar">COMPRAR</button>
        </BuyBoxComponent>
    );
}
 
export default BuyBox;