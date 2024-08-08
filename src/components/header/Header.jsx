import { HeaderComponent } from "./HeaderStyle";

import LogoHeader from '../../assets/logo-header.svg'
import MiniCart from '../../assets/mini-cart.svg'

import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";


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
                    <input type="text" name="pesquisar" id="pesquisar" placeholder="Pesquisar produto..."/>
                    <CiSearch  className="lupa"/>
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