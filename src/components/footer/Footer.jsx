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
            <section className="footer">
                <section className="logo">
                    <img src={LogoFooter} alt="digital store" />

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>

                    <div className="redesSociais">
                        <a href=""><img src={Facebook} alt="facebook" /></a>
                        <a href=""><img src={Instagram} alt="instagram" /></a>
                        <a href=""><img src={Twitter} alt="twitter" /></a>
                    </div>
                </section>

                {
                    footer.map((item,index)=>{
                        return (
                            <section key={index} className="linkFooter">
                                {
                                    <div className="informacao">
                                        <h3>{item.title}</h3>
                                        <div className="links">
                                            {item.informations.map((itens,index)=>{
                                                return (
                                                <div key={index}>
                                                    <a href="">{itens}</a>
                                                </div>
                                            )
                                            })}
                                        </div>
                                    </div>
                                }
                            </section>
                        )
                    })
                }
            </section>

            <hr />

            <div className="copyright">
                <p>@ 2022 Digital College</p>
            </div>

        </FooterComponent>
    );
}
 
export default Footer;