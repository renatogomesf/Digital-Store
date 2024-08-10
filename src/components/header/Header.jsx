import { HeaderComponent } from "./HeaderStyle";

import LogoHeader from '../../assets/logo-header.svg'
import MiniCart from '../../assets/mini-cart.svg'

import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";


const Header = () => {

    
    const Menu = ()=> {
        const menuMobile = document.querySelector("#menuMobile")
        const menu = document.querySelector("#menu")
    
        menuMobile.classList.toggle("menuMobileOpen")
        menu.classList.toggle("menuOpen")

        menuMobile.classList.toggle("menuMobileClose")
        menu.classList.toggle("menuClose")



        const botoesMobile = document.querySelector("#botoesMobile")
        const navegacaoMobile = document.querySelector("#navegacaoMobile")

        botoesMobile.classList.toggle("botoesMobileOpen")
        navegacaoMobile.classList.toggle("navegacaoMobileOpen")

        botoesMobile.classList.toggle("botoesMobileClose")
        navegacaoMobile.classList.toggle("navegacaoMobileClose")
    }

    const baseURL = "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/"

    const produto = [
        {   
            tagDesconto: "30% OFF",
            tipoProduto: "Tênis",
            name: "Nike Air Jordan 1 Mid",
            image: baseURL + "product-thumb-1.jpeg",
            imageQuery: "product-thumb-1.jpeg",
            price: "R$1.614,99",
            priceDiscount: "R$1.299,99"
        },
        {   
            tagDesconto: "30% OFF",
            tipoProduto: "Tênis",
            name: "Nike Air Jordan 1 Retro High",
            image: baseURL + "product-thumb-2.jpeg",
            imageQuery: "product-thumb-2.jpeg",
            price: "R$1.200,00",
            priceDiscount: "R$899,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Levi's Ethan S WX",
            image: baseURL + "product-thumb-3.jpeg",
            imageQuery: "product-thumb-3.jpeg",
            price: "R$0,00",
            priceDiscount: "R$1.083,86"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Karhu synchron classic",
            image: baseURL + "product-thumb-4.jpeg",
            imageQuery: "product-thumb-4.jpeg",
            price: "R$0,00",
            priceDiscount: "R$675,00"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nike SuperRep Go",
            image: baseURL + "product-thumb-5.jpeg",
            imageQuery: "product-thumb-5.jpeg",
            price: "R$0,00",
            priceDiscount: "R$2.158,72"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nike Air Jordan 1 Mid Sonics",
            image: baseURL + "produc-image-1.jpeg",
            imageQuery: "produc-image-1.jpeg",
            price: "R$0,00",
            priceDiscount: "R$1.949,99"
        },
        {   
            tagDesconto: "30% OFF",
            tipoProduto: "Tênis",
            name: "Anacapri",
            image: baseURL + "produc-image-2.jpeg",
            imageQuery: "produc-image-2.jpeg",
            price: "R$229,90",
            priceDiscount: "R$119,90"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nike SB Dunk High Pro",
            image: baseURL + "produc-image-3.jpeg",
            imageQuery: "produc-image-3.jpeg",
            price: "R$0,00",
            priceDiscount: "R$474,99"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "All Star Chuck Taylor Pocket Hi Cano Médio",
            image: baseURL + "produc-image-4.jpeg",
            imageQuery: "produc-image-4.jpeg",
            price: "R$0,00",
            priceDiscount: "R$189,91"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nike Air Max 1 Ultra",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$0,00",
            priceDiscount: "R$749,99"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nike Air Max 1 Ultra",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$0,00",
            priceDiscount: "R$749,99"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nike Air Max 1 Ultra",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$0,00",
            priceDiscount: "R$749,99"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nike Air Max 1 Ultra",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$0,00",
            priceDiscount: "R$749,99"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nike Air Max 1 Ultra",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$0,00",
            priceDiscount: "R$749,99"
        },
        {   
            tagDesconto: "",
            tipoProduto: "Tênis",
            name: "Nike Air Max 1 Ultra",
            image: baseURL + "produc-image-5.jpeg",
            imageQuery: "produc-image-5.jpeg",
            price: "R$0,00",
            priceDiscount: "R$749,99"
        }
    ]

    const filtroRef = useRef()
    const [itensFiltro, setIntesFiltro] = useState([])

    const handleFilter = ()=> {

        const filtro = document.querySelector(".filtro")
        filtro.style.display = "block"


        const item = produto.filter((item)=>{

            let itemLower = item.name.toLowerCase()
            let filtroLower = filtroRef.current.value.toLowerCase()

            if(filtroRef.current.value === ""){
                return ""
            }else if(itemLower.includes(filtroLower)){
                return item
            }
        })
        setIntesFiltro(item)
    }

    const handleFilterClose = ()=> {
        const filtro = document.querySelector(".filtro")
        filtro.style.display = "none"
        filtroRef.current.value = ""
    }


    return (
        <HeaderComponent>
            <section className="principal">

                <div id="menuMobile" className="menuMobileClose" onClick={Menu}>
                    <span id="menu" className="menuClose"></span>
                </div>

                <div>
                    <img src={LogoHeader} alt="digital store" />
                </div>

                <div className="pesquisa">
                    <input ref={filtroRef} type="text" name="pesquisar" id="pesquisar" placeholder="Pesquisar produto..." onChange={handleFilter}/>
                    <CiSearch  className="lupa"/>

                    <div className="filtro">
                        {
                            itensFiltro.map((item,index)=>{
                                return (
                                    <Link key={index} to={`/produto-detalhe/${item.name}/${item.imageQuery}/${item.price}/${item.priceDiscount}`}>
                                        <div className="produto" onClick={handleFilterClose}>
                                            <img src={item.image} alt={item.name} />
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

                <div id="botoesMobile" className="botoes botoesMobileClose">
                    <button className="btnCadastrese">Cadastre-se <hr /></button>
                    <button className="btnEntrar">Entrar</button>
                </div>

                <button className="btnMiniCart">
                    <img src={MiniCart} alt="carrinho de compras" />
                    <sup>2</sup>
                </button>

            </section>

            <section id="navegacaoMobile" className="navegacao navegacaoMobileClose">
                <nav> 
                    <ul>
                        <li onClick={Menu}>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'notactive')} to={"/Digital-Store"}>
                                Home <hr />
                            </NavLink>
                        </li>
                        <li onClick={Menu}>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'notactive')} to={"/produtos"}>
                                Produtos <hr />
                            </NavLink>
                        </li>
                        <li onClick={Menu}>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'notactive')} to={"/categorias"}>
                                Categorias <hr />
                            </NavLink>
                        </li>
                        <li onClick={Menu}>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'notactive')} to={"/meuspedidos"}>
                                Meus Pedidos <hr />
                            </NavLink>
                        </li>
                        <hr className="hrMobile" />
                    </ul>
                </nav>
            </section>
        </HeaderComponent>
    );
}
 
export default Header;