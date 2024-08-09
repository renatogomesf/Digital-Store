import { HeaderComponent } from "./HeaderStyle";

import LogoHeader from '../../assets/logo-header.svg'
import MiniCart from '../../assets/mini-cart.svg'

import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
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
            name: "Air Jordan 1 Mid",
            image: baseURL + "product-thumb-1.jpeg",
            price: "$1.614,99",
            priceDiscount: "$1.299,99"
        },
        {   
            tagDesconto: "30% OFF",
            tipoProduto: "Tênis",
            name: "Air Jordan 1 Retro High",
            image: baseURL + "product-thumb-2.jpeg",
            price: "$1.200",
            priceDiscount: "$899,90"
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

    const filtroRef = useRef()
    const [itensFiltro, setIntesFiltro] = useState([])

    const handleFilter = ()=> {
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
                            itensFiltro.map((item)=>{
                                return (
                                    <div className="produto">
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                    </div>
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
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'notactive')} to={"/projeto-front-end"}>
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