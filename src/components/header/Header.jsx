import { HeaderComponent } from "./HeaderStyle";

import LogoHeader from '../../assets/logo-header.svg'
import MiniCart from '../../assets/mini-cart.svg'

import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <HeaderComponent>
            <section className="principal">
                <div>
                    <img src={LogoHeader} alt="digital store" />
                </div>

                <div className="pesquisa">
                    <input type="text" name="pesquisar" id="pesquisar" placeholder="Pesquisar produto..."/>
                    <CiSearch  className="lupa"/>
                </div>

                <div className="botoes">
                    <button className="btnCadastrese">Cadastre-se <hr /></button>
                    <button className="btnEntrar">Entrar</button>
                </div>

                <button className="btnMiniCart">
                    <img src={MiniCart} alt="carrinho de compras" />
                    <sup>2</sup>
                </button>

            </section>

            <section className="navegacao">
                <nav> 
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'notactive')} to={"/"}>
                                Home <hr />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'notactive')} to={"/produtos"}>
                                Produtos <hr />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'notactive')} to={"/categorias"}>
                                Categorias <hr />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'notactive')} to={"/meuspedidos"}>
                                Meus Pedidos <hr />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
        </HeaderComponent>
    );
}
 
export default Header;