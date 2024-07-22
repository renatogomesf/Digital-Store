import styled from "styled-components";

import ProductCard from "../productCard/ProductCard";


const ProductListing = (props) => {

    const baseURL = "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/"

    const produto = [
        {   
            tagDesconto: "30% OFF",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-1.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "30% OFF",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-2.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-3.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-4.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-5.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-3.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "30% OFF",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-4.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-2.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-2.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-2.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-2.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-2.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-2.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-2.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nome do produto",
            image: baseURL + "product-thumb-2.jpeg",
            price: "$200",
            priceDiscount: "$149.9"
        },
    ]


    const ProductListingComponent = styled.section`

        display: grid;
        grid-template-columns: repeat(${props.qtdColuna}, auto);
        gap: ${props.gap};
    
    `

    let i = 1

    return (
        <ProductListingComponent>
            {
                produto.map((item,index)=>{
                    if(i <= props.qtdCards){

                        i++

                        return (
                            <ProductCard key={index} produto = {item}/>
                        )
                    }
                })
            }
        </ProductListingComponent>
    );
}
 
export default ProductListing;