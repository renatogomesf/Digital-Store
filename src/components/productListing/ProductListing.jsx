import styled from "styled-components";

import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";


const ProductListing = (props) => {

    const baseURL = "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/"

    const produto = [
        {   
            tagDesconto: "30% OFF",
            tipoProduto: "Tênis",
            name: "Air Jordan 1 Mid",
            image: baseURL + "product-thumb-1.jpeg",
            imageQuery: "product-thumb-1.jpeg",
            price: "R$1.614,99",
            priceDiscount: "R$1.299,99"
        },
        {   
            tagDesconto: "30% OFF",
            tipoProduto: "Tênis",
            name: "Air Jordan 1 Retro High",
            image: baseURL + "product-thumb-2.jpeg",
            imageQuery: "product-thumb-2.jpeg",
            price: "R$1.200,00",
            priceDiscount: "R$899,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-3.jpeg",
            imageQuery: "product-thumb-3.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-4.jpeg",
            imageQuery: "product-thumb-4.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-5.jpeg",
            imageQuery: "product-thumb-5.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "produc-image-1.jpeg",
            imageQuery: "produc-image-1.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "30% OFF",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "produc-image-2.jpeg",
            imageQuery: "produc-image-2.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "produc-image-3.jpeg",
            imageQuery: "produc-image-3.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "produc-image-4.jpeg",
            imageQuery: "produc-image-4.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$200,00",
            priceDiscount: "R$149,90"
        },
    ]


    const ProductListingComponent = styled.section`

        display: grid;
        grid-template-columns: repeat(${props.qtdColuna}, auto);
        gap: ${props.gap};
        flex-wrap: wrap;


        @media (max-width: 1350px) {
            grid-template-columns: repeat(3, auto);
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, auto);
        }
    `

    let i = 1

    return (
        <ProductListingComponent>
            {
                produto.map((item,index)=>{
                    if(i <= props.qtdCards){

                        i++

                        return (
                            <Link to={`/produto-detalhe/${item.name}/${item.imageQuery}/${item.price}/${item.priceDiscount}`}>
                                <ProductCard key={index} produto = {item}/>
                            </Link>
                        )
                    }
                })
            }
        </ProductListingComponent>
    );
}
 
export default ProductListing;