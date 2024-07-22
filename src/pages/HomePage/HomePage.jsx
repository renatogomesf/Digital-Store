import Gallery from "../../components/gallery/Gallery";
import ProductListing from "../../components/productListing/ProductListing";
import Section from "../../components/Section/Section";


import { CollectionDestaque01, CollectionDestaque02 } from './HomePageStyle';
import { Hat, Headphones, Pants, Sneakers, Tshirt } from "./HomePageSVG";


const HomePage = () => {

    return (
        <>
            <Gallery/>

            <Section titleAlign = {"left"} title={"Coleções em destaque"} link={{text:"", href: ""}}>

                <CollectionDestaque01>
                    <div className="Destaque01" >
                        <img className="imgDestaque" src={"../../public/collection-1.png"} alt="coleção em destaque" />

                        <div className="informacao">
                            <span className="tagOferta">30% OFF</span>
                            <p className="tituloColecao">Novo drop Supreme</p>
                            <button className="btnComprar"> Comprar </button>
                        </div>
                    </div>
                    
                    <div className="Destaque01" >
                        <img className="imgDestaque" src={"../../public/collection-2.png"} alt="coleção em destaque" />

                        <div className="informacao">
                            <span className="tagOferta">30% OFF</span>
                            <p className="tituloColecao">Coleção Adidas</p>
                            <button className="btnComprar"> Comprar </button>
                        </div>
                    </div>

                    <div className="Destaque01" >
                        <img className="imgDestaque" src={"../../public/collection-3.png"} alt="coleção em destaque" />

                        <div className="informacao">
                            <span className="tagOferta">30% OFF</span>
                            <p className="tituloColecao titulo3">Novo Beats Bass</p>
                            <button className="btnComprar"> Comprar </button>
                        </div>
                    </div>
                </CollectionDestaque01>

            </Section>



            <Section titleAlign = {"center"} title={"Coleções em destaque"} link={{text:"", href: ""}}>

                <CollectionDestaque02>
                    <div className="Destaque02" >
                        <div className="svgDestaque">
                            <Tshirt/>
                        </div>
                        <p>Camisetas</p>
                    </div>

                    <div className="Destaque02" >
                        <div className="svgDestaque">
                            <Pants/>
                        </div>
                        <p>Calças</p>
                    </div>

                    <div className="Destaque02" >
                        <div className="svgDestaque">
                            <Hat/>
                        </div>
                        <p>Bonés</p>
                    </div>

                    <div className="Destaque02" >
                        <div className="svgDestaque">
                            <Headphones/>
                        </div>
                        <p>Headphones</p>
                    </div>

                    <div className="Destaque02" >
                        <div className="svgDestaque">
                            <Sneakers/>
                        </div>
                        <p>Tênis</p>
                    </div>
                </CollectionDestaque02>

            </Section>


            <Section titleAlign = {"left"} title={"Produtos em alta"} link={{text:"Ver todos", href: ""}}>
                <ProductListing/>
            </Section>


        </>
    );
}
 
export default HomePage;