import ProductCard from "../productCard/ProductCard";
import { ProductListingComponent } from './ProductListingStyle';

const ProductListing = () => {

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
    ]

    return (
        <ProductListingComponent>
            {
                produto.map((item,index)=>{
                    return (
                        <ProductCard key={index} produto = {item}/>
                    )
                })
            }
        </ProductListingComponent>
    );
}
 
export default ProductListing;