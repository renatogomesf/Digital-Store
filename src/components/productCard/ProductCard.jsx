import { ProductCardComponent } from "./ProductCardStyle";

const ProductCard = (props) => {
    return (
        <ProductCardComponent>
            <div className="imagem">
                <span className="tagDesconto" style={{display:(props.produto.tagDesconto)?"block":"none"}}>
                    {props.produto.tagDesconto}
                </span>
                <img src={props.produto.image} alt={props.produto.name} />
            </div>
            <p className="tipoProduto">{props.produto.tipoProduto}</p>
            <p className="nomeProduto">{props.produto.name}</p>
            <div className="precos">
                <span className="preco">{props.produto.price}</span>
                <span className="precoDesconto">{props.produto.priceDiscount}</span>
            </div>
        </ProductCardComponent>
    );
}
 
export default ProductCard;