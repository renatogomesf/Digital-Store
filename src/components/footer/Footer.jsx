import { FooterComponent } from "./FooterStyle";

import LogoFooter from '../../assets/logo-footer.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'

const Footer = () => {

    const footer = [
        {
            title: "Informação",
            informations: [
                "Sobre Drip Store",
                "Segurança",
                "Wishlist",
                "Blog",
                "Trabalhe conosco",
                "Meus Pedidos"
            ]
        },

        {
            title: "Categoria",
            informations: [
                "Camisetas",
                "Calças", 
                "Bonés", 
                "Headphones", 
                "Tênis"
            ]
        },

        {
            title: "Contato",
            informations: [
                "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
                "(85) 3051-3411"
            ]
        }
    ]


    return (
        <FooterComponent>
            <section className="logo">
                <img src={LogoFooter} alt="digital store" />

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <div>
                    <img src={Facebook} alt="facebook" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Twitter} alt="twitter" />
                </div>
            </section>

            {
                footer.map((item)=>{
                    return (
                        <section className="informacao">
                            {
                                <div>
                                    <h4>{item.title}</h4>
                                    <div>
                                        {item.informations.map((itens)=>{
                                            return <a href="">{itens}</a>
                                        })}
                                    </div>
            
                                </div>
                            }
                        </section>
                    )
                })
            }

            <hr />

            <div>
                <p>@ 2022 Digital College</p>
            </div>

        </FooterComponent>
    );
}
 
export default Footer;